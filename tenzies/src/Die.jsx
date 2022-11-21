import React from 'react';

const Die = (props) => {

  const styles = {
    backgroundColor: props.isHeld ? "#4ee088" : "#00000"

  }

  return (
    <div className="die-face held" onClick={props.holdDice} style={styles}>
      <h2>{props.value}</h2>
    </div>
  );
};

export default Die;