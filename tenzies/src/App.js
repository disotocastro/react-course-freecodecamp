import React, { useState } from 'react';
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'




const App = () => {

  const [dice, setDice] = useState(allNewDice())

  function generateNewDie() {
    return {
      value: (Math.floor(Math.random() * 6) + 1),
      isHeld: false,
      id: nanoid()
    }
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
        die :
        generateNewDie()
    }))
  }

  function allNewDice() {
    let arrayDice = []
    for (let i = 0; i < 10; i++) {
      arrayDice.push(generateNewDie());

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

  const [tenzies, setTenzies] = React.useState(false)


  React.useEffect(() => {
    let allHeld = dice.every(die => die.isHeld);
    let firstValue = dice[0].value;
    let allSameNumber = dice.every(die => die.value === firstValue);

    if (allHeld && allSameNumber) {
      setTenzies(true);
      console.log('You won!');
    }

  }, [dice])

  return (
    <div>
      <main className="tenzies--background-container">
        <div className="tenzies--background">
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="die--container">
            {diceElements}
          </div>
          <div onClick={rollDice} className="tenzies--roll-btn">
            {tenzies ? "New game" : "Roll"}
          </div>
          {tenzies ?
            <Confetti
              width={window.innerWidth - 10}
              height={window.innerHeight}
            />
            : ""
          }

        </div>
      </main>
    </div>
  );
};

export default App;