import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  // Load saved text when the page opens
  useEffect(() => {
    const saved = localStorage.getItem("doc-vault-text");
    if (saved) {
      setText(saved);
    }
  }, []);

  // Save text whenever it changes
  useEffect(() => {
    localStorage.setItem("doc-vault-text", text);
  }, [text]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Doc Vault</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
        style={{ width: "100%", height: "200px" }}
      />
    </div>
  );
}
