import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";

function Create(props) {
  const [message, setMessage] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setMessage((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitMessage(event) {
    props.onAdd(message);
    setMessage({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <p className="paragraph">Leave a message if you want</p>
      <form className="create">
        <input
          name="title"
          onChange={handleChange}
          value={message.title}
          placeholder="Subject"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={message.content}
          placeholder="Leve a message..."
          rows="3"
        />
        <Fab onClick={submitMessage}>
          <SendIcon />
        </Fab>
      </form>
    </div>
  );
}

export default Create;
