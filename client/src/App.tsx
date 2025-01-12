/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

interface Message {
  type: "message";
  sender: string;
  content: string;
  timestamp: number;
}

const App: React.FC = () => {
  const [message, setMessage] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const ws = useRef<WebSocket | null>(null);
  const messageEndRef = useRef<HTMLDivElement>(null)

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


  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [message])


  const handleJoin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsJoined(true);
    }
  };

  if (!isJoined) {
    return (
      <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <form onSubmit={handleJoin} className="bg-white p-8 rounded-lg shadow-md">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              className="w-full p-2 border rounded mb-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 duration-500"
            >
              Join Chat
            </button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md h-[80vh] flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold">Chat Room</h1>
            <p className="text-gray-600">Logged in as {username}</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {message.map((msg, i) => (
                <div
                key={i}
                className={`mb-4 ${
                  msg.sender === username ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                  className={`inline-block p-3 rounded-lg ${
                    msg.sender === 'System'
                      ? 'bg-gray-200'
                      : msg.sender === username
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300'
                    }`}
                  >
                    <p className="font-bold text-sm">{msg.sender}</p>
                    <p>{msg.content}</p>
                    <p className="text-xs opacity-75">
                      {new Date(msg.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>
            ))
            }
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
