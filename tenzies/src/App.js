import React, { useState } from 'react';
import Die from './Die'



const App = () => {

  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map(die => <Die value={die} />)

  function rollDice() {
    setDice(allNewDice())
  }


  function allNewDice() {
    let arrayDice = []
    for (let i = 0; i < 10; i++) {
      arrayDice.push(Math.floor(Math.random() * 6) + 1);

    }
    return arrayDice
  }



  return (
    <div>
      <main className="tenzies--background-container">
        <div className="tenzies--background">
          <div className="die--container">
            {diceElements}
          </div>
          <div onClick={rollDice} className="tenzies--roll-btn">
            Roll
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;