import { useEffect, useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function generateRandom(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateHex() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandom(hex.length)];
    }
    setColor(hexColor);
  }

  function handleGenerateRgb() {
    const r = generateRandom(256);
    const g = generateRandom(256);
    const b = generateRandom(256);
    setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    colorType === "rgb" ? handleGenerateRgb() : handleGenerateHex();
  }, [colorType]);

  console.log(colorType);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setColorType("hex")}>Create Hex Colour</button>
      <button onClick={() => setColorType("rgb")}>Create RGB Colour</button>
      <button
        onClick={colorType === "hex" ? handleGenerateHex : handleGenerateRgb}
      >
        {" "}
        Generate colour
      </button>
      <h3>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h3>
      <h1>{color}</h1>
    </div>
  );
}
