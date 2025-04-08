import { useState } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  const handleChat = async () => {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: question }],
          },
        ],
      }
    );
    setAnswer(response.data.candidates[0].content.parts[0].text);
    setQuestion("")
  };

  return (
    <>
      <div className="App">
        <h1>Chat Bot</h1>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          cols="50"
          rows="20"
          placeholder="Chat..."
        />
        <button onClick={handleChat}>Chat</button>
        <pre>{answer}</pre>
      </div>
    </>
  );
}

export default App;
