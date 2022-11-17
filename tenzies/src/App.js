import React from 'react';
import Die from './Die'
const App = () => {
  return (
    <div>
      <main className="tenzies--background-container">
        <div className="tenzies--background">
          <div className="die--container">
            <Die value={1} />
            <Die value={5} />
            <Die value={6} />
            <Die value={3} />
            <Die value={4} />
            <Die value={1} />
            <Die value={5} />
            <Die value={2} />
            <Die value={3} />
            <Die value={1} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;