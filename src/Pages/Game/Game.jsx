import "./Game.css";
import { useState } from "react";
import skull from "../../assets/skull.png";
import x from "../../assets/x.png";
import chest from "../../assets/chest.png";
import Tablero from "../../components/Tablero/Tablero";

const images = {
  x: x,
  chest: chest,
  skull: skull,
};

export default function Game() {
  const [counter, setCounter] = useState(0);
  const [array, setArray] = useState([]);
  const arrayFour = () => {
    setArray([0, 1, 2, 3]);
  };
  const arrayEight = () => {
    setArray([0, 1, 2, 3, 4, 5, 6, 7]);
  };
  const arraySixteen = () => {
    setArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  };
  const tableBoard = array;
  const random = Math.floor(Math.random() * tableBoard.length);
  console.log(array);
  console.log(tableBoard.length);

  return (
    <div className="app template">
      <div>
        <div>
          <h1>BUSQUEDA DEL TESORO</h1>
        </div>

        <h2>ENCUETRA EL TESORO</h2>
        <div>
          <img src={chest} alt="x"></img>
        </div>
      </div>

      <div className="tablero">
        {tableBoard.map((index) => (
          <div key={index}>
            <Tablero
              carta={images}
              index={index}
              random={random}
              setCounter={setCounter}
              counter={counter}
            />
          </div>
        ))}
      </div>

      <div>
        <div className="marcador">
          <h2>INTENTOS</h2>
          <h4>{counter}</h4>
        </div>
        <div>
          <button onClick={() => arrayFour()}>TABLERO 4</button>
        </div>
        <div>
          <button onClick={() => arrayEight()}>TABLERO 8</button>
        </div>
        <div>
          <button onClick={() => arraySixteen()}>TABLERO 16</button>
        </div>
      </div>
    </div>
  );
}
