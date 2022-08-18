import React, { useEffect, useState } from "react";

const Game = (props) => {
    const [deckID, setDeckID] = useState(null);
    const [cardsLeft, setCardsLeft] = useState(null);
    const [snapFound, setSnapFound] = useState(false);
    const [card1, setCard1] = useState(null);
    const [card2, setCard2] = useState(null);

const drawTwoCards = () => {
    if (cardsLeft === 0 || snapFound) {
        newGameEvent();
    } else {
        const newGameEvent = () => {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .then((res) => res.json())
            .then((res) => {
                console.log("API response: ", res);
                setDeckID(res.deck_id);
                setCardsLeft(res.remaining);
                setSnapFound(false)
                setCard1(null)
                setCard2(null)
            })
            .catch((error) => console.log(error));   
        }
    }
}
return (
<>
<h1>Lets play snap!</h1>
    <cards
    deckID={deckID}
    cardsLeft={cardsLeft}
    card1={card1}
    card2={card2}
    snapFound={snapFound}
    drawTwoCards={drawTwoCards}
    />
</>
)
}
export default Game;

useEffect(() => {
    newGameEvent()
}, [])

const newGameEvent = () => {
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((res) => res.json())
    .then((res) => {
        console.log("API response: ", res);
        setDeckID(res.deck_id);
        setCardsLeft(res.remaining);
    })
    .catch((error) => console.log(error));
};