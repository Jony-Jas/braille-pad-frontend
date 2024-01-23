import { useState } from "react";
import "./App.css";
import Recorder from "./Recorder";

function App() {
  const [input, setInput] = useState("");
  const [rec, serRec] = useState(false);

  const submit = async (text) => {
    alert("Audio sent successfully !")
    // await fetch("https://48ac-2409-40f4-10f8-16fe-d063-8d74-e900-924e.ngrok-free.app/message", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ message: text }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    // fetch("https://a3a6-152-58-214-148.ngrok-free.app/message", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ message: input }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));a
    alert("Message sent successfully !")
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Braille Pad</h1>
      </header>
      <main style={{ padding: "10px" }}>
        <form onSubmit={handleSubmit}>
          <h2>Message</h2>
          <input
            type="text"
            className=""
            style={{ width: "80%", height: "50px", fontSize: "20px" }}
            value={input} 
            onChange={(e) => setInput(e.target.value)}
          />
          <br />
          <br />
          <button
            style={{ display: "block", width: "80px", height: "40px" }}
            type="submit"
          >
            Send
          </button>
        </form>
        <h2>Record Voice</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="./microphone.png"
            alt="microphone"
            style={{ height: "150px", width: "150px" }}
          />
          <br />
          <div>
            <button
              onClick={() => {
                serRec(!rec);
              }}
            >
              {rec ? "Stop Recording" : "Start Recording"}
            </button>
          </div>
          <span>{rec ? "recording ..." : ""}</span>
        </div>
        <div
          style={{ margin: "10px", display: "flex", justifyContent: "center" }}
        >
          <input type="radio" name="gender" value="english" defaultChecked />{" "}
          English
          <input type="radio" name="gender" value="tamil" /> Tamil
          <input type="radio" name="gender" value="hindi" /> Hindi
        </div>
        <button
          style={{ display: "block", width: "80px", height: "40px" }}
          disabled={rec}
          onClick={async () => {
            await submit("hello");
          }}
        >
          Send
        </button>
        {/* <Recorder /> */}
      </main>
    </div>
  );
}

export default App;
