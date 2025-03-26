"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const onClick = async () => {
    const res = await fetch("http://localhost:3001/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "ヒバごん" }),
    });

    const textResponse = await res.json();

    console.log(textResponse.data.text);
    const text = textResponse.data.text;
    setMessage(text);
  };
  return (
    <div className="h-screen w-screen">
      <div className="h-[10%] flex gap-4 w-full bg-red">
        <span>確認ボタン</span>
        <button onClick={onClick} className="bg-white h-5">
          確認
        </button>
      </div>
      <div className="flex">
        <span>表示メッセージ：</span>
        <span>{message}</span>
      </div>
    </div>
  );
}
