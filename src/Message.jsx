import React, { useState } from "react";
import Create from "./Create";
import Delete from "./Delete";

function Message() {
  const [messages, setMessages] = useState([]);
  function addMessage(newMessage) {
    setMessages((prevValues) => {
      return [...prevValues, newMessage];
    });
  }
  function deleteMessage(id) {
    setMessages((prevValues) => {
      return prevValues.filter((messageItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Create onAdd={addMessage} />
      {messages.map((messageItem, index) => {
        return (
          <Delete
            key={index}
            id={index}
            title={messageItem.title}
            content={messageItem.content}
            onDelete={deleteMessage}
          />
        );
      })}
    </div>
  );
}

export default Message;
