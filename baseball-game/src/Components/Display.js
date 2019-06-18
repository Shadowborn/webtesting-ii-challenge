import React from 'react';

export default function Display({display}) {
    if(!display.length) {
        return <h2>No data to list</h2>
    }
    return (
        <ul>
            {display.map(display => (
                <li key={display.id}><h1>{"Player: "}{display.name}</h1><h1>{"Balls: "}{display.balls}{" Strikes: "}{display.strikes}</h1></li>
            ))}
        </ul>
    )
}