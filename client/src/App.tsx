/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { WebSocket } from "ws";

interface Message {
  type: "message";
  sender: string;
  content: string;
  timestamp: number;
}

const App: React.FC = () => {
  const [message, setMessage] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [username, serUsername] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (isJoined && !ws.current) {
      ws.current = new WebSocket("ws://localhost:8081");

      ws.current.onmessage = (event) => {
        let messageData = event.data;

        if (messageData instanceof ArrayBuffer) {
          const decoder = new TextDecoder();
          messageData = decoder.decode(messageData);
        } else if (Array.isArray(messageData)) {
          messageData = messageData
            .map((item) => {
              if (item instanceof ArrayBuffer) {
                const decoder = new TextDecoder();
                return decoder.decode(item);
              }
              return item;
            })
            .join("");
        }

        if (typeof messageData === "string") {
          const message = JSON.parse(messageData);
          setMessage((prev) => [...prev, message]);
        } else {
          console.error("Received data is neither a string nor a Buffer");
        }
      };

      ws.current.onopen = () => {
        ws.current?.send(JSON.stringify({ type: "join", username }));
      };
    }
  }, [isJoined, username]);

  if(!isJoined) {
    return (
      <>
        
      </>
    )
  }

};

export default App;
