import { Wheel } from "react-custom-roulette";
import "./App.css";
import { useState } from "react";

function App() {
  let data = [];
  for (let i = 0; i < 101; i++) {
    data.push({
      option: i,
    });
  }
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);

  const randomNumber = async () => {
    const response = await fetch("http://localhost:8080/randomNumber", {
      method: "POST",
    });
    const data = await response.json();
    console.log("data", data);

    setPrizeNumber(data.value);
    setMustSpin(true);
  };

  return (
    <main>
      <h1>Rueda de la fortuna</h1>
      <section>
        <Wheel
          fontSize={-300}
          perpendicularText={true}
          radiusLineWidth={0.1}
          data={data}
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
          spinDuration={0.1}
        />
      </section>

      <button onClick={randomNumber}>Girar</button>
      {prizeNumber && <div className="winner">Ganador: {prizeNumber}</div>}
    </main>
  );
}

export default App;
