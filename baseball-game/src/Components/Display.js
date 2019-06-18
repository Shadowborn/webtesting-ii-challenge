import React from 'react';

export default function Display({display}) {
    if(!display.length) {
        return <h2>No players to list</h2>
    }
    function addballs() {
        display.balls = display[0].balls++;
        console.log("Button clicked", display[0].balls)
    }
    return (
        <ul>
            {display.map(display => (
                <li key={display.id}>
                    <div>{"Player: "}{display.name}</div>
                    <div><button onClick={addballs}>Add ball</button>{"Balls: "}{display.balls}
                         {" Strikes: "}{display.strikes}
                         {" Fouls: "}{display.fouls}
                         {" Hits: "}{display.hits}
                    </div>
                </li>
            ))}
        </ul>
    )
}