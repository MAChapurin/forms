import { useRef, useState, useEffect } from "react";
import "./App.css";
import InputColor from "./components/InputColor";
import OutputRGB from "./components/OutputRGB";

function App() {
  const color = useRef();
  const [colorBG, setColorBG] = useState("#0A3069");
  const [rgb, setRGB] = useState();

  function hexToRgb(color) {
    if (color.length < 7) return null;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    const res = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;

    if (res) {
      const {r, g, b} = res;
      return "rgb(" + r + "," + g + "," + b + ")"
    }
    setColorBG('#fe9600');
    return 'Ошибка!'
  }

  const onChange = (event) => {
    color.current = event.target.value;
    // console.log("ref: ", color.current);
    setColorBG(color.current);
    setRGB(hexToRgb(color.current));
  };

  useEffect(() => {
    setColorBG(color.current);
  }, [colorBG]);

  return (
    <div className="App" style={{ backgroundColor: colorBG }}>
      <InputColor color={color} onChange={onChange} />
      <OutputRGB rgb={rgb} />
    </div>
  );
}

export default App;
