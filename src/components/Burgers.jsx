import React from 'react'

function Burgers({ burgersArray }) {
  return (
    <div>
      <h1>Ktu kam listen e burgersave nga Array Burgers:</h1>
      {burgersArray.map((el) => (
        <div key={el.type}>
          <h4>price: {el.cmimi}</h4>
          <h4>type: {el.type}</h4>
        </div>
      ))}
    </div>
  );
}

export default Burgers