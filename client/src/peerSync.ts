import Peer, { type DataConnection } from "peerjs";

export type PeerMessage =
  | { type: "INIT_STATE"; session: any; questions: any[]; students: any[]; currentIndex: number; responses: any[] }
  | { type: "STATE_UPDATE"; currentIndex: number; responses: any[] }
  | { type: "SUBMIT_ANSWER"; question_id: number; student_id: number; answer: "A" | "B" | "C" | "D" }
  | { type: "SUBMIT_BATCH"; question_id: number; answers: { student_id: number; answer: "A" | "B" | "C" | "D" }[] }
  | { type: "GOTO_QUESTION"; index: number }
  | { type: "PING" }
  | { type: "PONG" };

export interface HostConnection {
  peerId: string;
  qrUrl: string;
  broadcast: (msg: PeerMessage) => void;
  close: () => void;
}

export interface RemoteScannerConnection {
  send: (msg: PeerMessage) => void;
  close: () => void;
}

export function createHostSession(
  sessionId: number,
  onMessage: (msg: PeerMessage, conn: DataConnection) => void,
  onStatusChange: (status: "waiting" | "connected" | "disconnected" | "error", phoneCount: number) => void
): Promise<HostConnection> {
  return new Promise((resolve, reject) => {
    const rawPeer = (Peer as any).default || Peer;
    const cleanRandom = Math.random().toString(36).substring(2, 7);
    const customId = `ttl-${sessionId}-${cleanRandom}`;

    const peer = new rawPeer(customId, {
      debug: 1,
    });

    const activeConnections = new Set<DataConnection>();

    peer.on("open", (id: string) => {
      const origin = typeof window !== "undefined" ? window.location.origin : "https://the-kiem-tra.vercel.app";
      const qrUrl = `${origin}/?remoteScan=${id}&sessionId=${sessionId}`;

      onStatusChange("waiting", 0);

      resolve({
        peerId: id,
        qrUrl,
        broadcast: (msg: PeerMessage) => {
          for (const conn of activeConnections) {
            if (conn.open) {
              try {
                conn.send(msg);
              } catch (e) {
                console.error("Lỗi gửi dữ liệu tới điện thoại:", e);
              }
            }
          }
        },
        close: () => {
          for (const conn of activeConnections) {
            conn.close();
          }
          peer.destroy();
        },
      });
    });

    peer.on("connection", (conn: DataConnection) => {
      conn.on("open", () => {
        activeConnections.add(conn);
        onStatusChange("connected", activeConnections.size);
      });

      conn.on("data", (data: any) => {
        onMessage(data as PeerMessage, conn);
      });

      conn.on("close", () => {
        activeConnections.delete(conn);
        onStatusChange(activeConnections.size > 0 ? "connected" : "waiting", activeConnections.size);
      });

      conn.on("error", (err) => {
        console.warn("Lỗi kết nối peer connection:", err);
      });
    });

    peer.on("error", (err: any) => {
      console.error("Lỗi PeerJS:", err);
      onStatusChange("error", activeConnections.size);
      reject(err);
    });
  });
}

export function connectToHostSession(
  hostPeerId: string,
  onMessage: (msg: PeerMessage) => void,
  onStatusChange: (status: "connecting" | "connected" | "disconnected" | "error") => void
): Promise<RemoteScannerConnection> {
  return new Promise((resolve, reject) => {
    const rawPeer = (Peer as any).default || Peer;
    const clientPeer = new rawPeer({
      debug: 1,
    });

    onStatusChange("connecting");

    clientPeer.on("open", () => {
      const conn = clientPeer.connect(hostPeerId, {
        reliable: true,
      });

      conn.on("open", () => {
        onStatusChange("connected");
        // Gửi ping ban đầu
        conn.send({ type: "PING" });

        resolve({
          send: (msg: PeerMessage) => {
            if (conn.open) {
              conn.send(msg);
            }
          },
          close: () => {
            conn.close();
            clientPeer.destroy();
          },
        });
      });

      conn.on("data", (data: any) => {
        onMessage(data as PeerMessage);
      });

      conn.on("close", () => {
        onStatusChange("disconnected");
      });

      conn.on("error", (err) => {
        console.error("Lỗi DataConnection:", err);
        onStatusChange("error");
      });
    });

    clientPeer.on("error", (err: any) => {
      console.error("Lỗi Client PeerJS:", err);
      onStatusChange("error");
      reject(err);
    });
  });
}
