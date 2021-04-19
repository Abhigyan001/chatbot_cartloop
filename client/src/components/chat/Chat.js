import React, {useState} from 'react'

const Chat = () => {

  const [message, setMessage] = useState("");
  const handleClick = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      console.log(message);
      userMessage(message);
      sendMessage(message);
      setMessage("");
    }
  };
  return (
    <div>
      <h1>Cartloop Chatbox</h1>
      <input
        id="chatBox"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleClick}
        value={message}
      ></input>
    </div>
  )
}


export default Chat;