import React from 'react';

export default function Display({display}) {
    if(!display.length) {
        return <h2>No players to list</h2>
    }
    return (
        <ul>
            {display.map(display => (
                <li key={display.id}>
                    <div>{"Player: "}{display.name}</div>
                    <div>{"Balls: "}{display.balls}
                         {" Strikes: "}{display.strikes}
                         {" Fouls: "}{display.fouls}
                         {" Hits: "}{display.hits}
                    </div>
                </li>
            ))}
        </ul>
    )
}