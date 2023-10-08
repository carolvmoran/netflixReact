import React, { useState } from "react";
import axios from "axios";
const Translate: React.FC = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const translateText = async () => {
    try {
      const response = await axios.get(
        `https://translate.yandex.net/api/v1.5/tr.json/translate?key=YOUR_API_KEY&text=${text}&lang=en-fr`
      );
      setTranslatedText(response.data.text[0]);
    } catch (error) {
      console.error("Erro ao traduzir texto:", error);
    }
  };

  return (
    <li>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Digite o texto para traduzir"
      />
      <button onClick={translateText}>Traduzir</button>
      {translatedText && <div>Tradução: {translatedText}</div>}
    </li>
  );
};

export default Translate;
