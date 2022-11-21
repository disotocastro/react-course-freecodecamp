import React, { useState } from 'react';
import Die from './Die'
import { nanoid } from 'nanoid'



const App = () => {

  const [dice, setDice] = useState(allNewDice())


  function rollDice() {
    setDice(allNewDice())
  }


  function allNewDice() {
    let arrayDice = []
    for (let i = 0; i < 10; i++) {
      arrayDice.push({
        value: (Math.floor(Math.random() * 6) + 1),
        isHeld: false,
        id: nanoid()
      });

    }
    return arrayDice
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    }))
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