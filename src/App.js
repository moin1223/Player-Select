import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import playersData from './data/data.json';
import Player from './Components/Player/Player';
import Cart from './Components/Player/Cart/Cart';



function App() {
  const [players, setPlayers] = useState([])
  useEffect(() => {
    setPlayers(playersData)
    console.log(playersData)

  }, [])
  const [cart, setCart] = useState([]);
  const handleAddPlayer = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
  }
  return (

    <div style={{ display: "flex" }}>

      <div style={{ width: "70%", marginLeft: "200px" }}>
        <h1>Player Select</h1>
        {
          players.map(player => <Player player={player}
            handleAddPlayer={handleAddPlayer}

          ></Player>)
        }

      </div>
      <div style={{border: "1px solid gray",height: "200px",marginTop: "100px",padding: "20px",marginRight:"100px"}}>
      <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
