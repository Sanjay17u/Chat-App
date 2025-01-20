import express from 'express';
import { WebSocket, WebSocketServer } from 'ws';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const wss = new WebSocketServer({ port: 8081 });

interface ChatMessage {
  type: 'message';
  sender: string;
  content: string;
  timestamps: number;
}

const clients = new Map<WebSocket, string>();

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (data: string) => {
    const message = JSON.parse(data);

    if (message.type === 'join') {
      clients.set(ws, message.username);
      broadcastMessage({
        type: 'message',
        sender: 'System',
        content: `${message.username} Joined The Chat`,
        timestamps: Date.now(),
      });
    } else if (message.type === 'message') {
      const sender = clients.get(ws) || 'Anonymous'; // handle undefined
      broadcastMessage({
        type: 'message',
        sender: sender,
        content: message.content,
        timestamps: Date.now(),
      });
    }
  });

  ws.on('close', () => {
    const username = clients.get(ws);
    clients.delete(ws);
    broadcastMessage({
      type: 'message',
      sender: 'System',
      content: `${username} left the chat`,
      timestamps: Date.now(),
    });
  });
});

function broadcastMessage(message: ChatMessage) {
  const messageStr = JSON.stringify(message);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(messageStr);
    }
  });
}

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
