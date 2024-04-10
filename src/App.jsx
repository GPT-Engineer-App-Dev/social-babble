import React, { useState } from "react";
import { FaUser, FaPaperPlane } from "react-icons/fa";

function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        id: Date.now(),
        text: inputMessage,
        sender: "me",
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="navbar bg-primary text-primary-content">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">ChatApp</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <FaUser className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div key={message.id} className={`chat ${message.sender === "me" ? "chat-end" : "chat-start"}`}>
            <div className="chat-bubble">{message.text}</div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex items-center p-4 bg-base-200">
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered flex-1 mr-2"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button className="btn btn-primary" onClick={handleSendMessage}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

export default App;
