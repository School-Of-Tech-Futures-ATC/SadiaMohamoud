import React from "react"

const Cards = (props) => {
    return(
        <div>
            <p>
                Your deck {props.deckID} has {props.cardsLeft} left
            </p>
            {props.snapFound && <p>SNAP - congratulations you won </p>}
            {(!props.cardsLeft && !props.snapFound) && <p>Bad luck - you lost</p>}
            <button onClick={props.drawTwoCards}>
                {props.snapFound ? "Play again" : "Draw two cards"}
            </button>
            <div>
                {props.card1 && (
                    <img alt="card 1" src={props.card1.image} height={200} width={200}/>
                )}
                {props.card2 && (
                    <img alt="card 1" src={props.card2.image} height={200} width={200}/>
                )}
            </div>
        </div>
    )
}