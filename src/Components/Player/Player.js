import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Player.css'


const Player = (props) => {
    const { name, club, marketvalue, image } = props.player;
    const imageStyle = { height: '150px', width: '150px' }


    return (

        <div className="players-container">

            <div className="player-detail">
                <img style={imageStyle} src={image} />
                <h2>Name:{name}</h2>
                <h3>Club:{club}</h3>
                <h4>Market value:${marketvalue}</h4>
                <button className="main-button"
                    onClick={() => props.handleAddPlayer(props.player)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />add to team</button>

            </div>


        </div>

    );
};

export default Player;