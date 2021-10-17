import React, { useState } from 'react';
import AddPlayer from './AddPlayer';


const Team = () => {
    const [player, setPlayer] = useState([
        { name: 'Sachin', country: 'India', batstyle: 'Righty', bowlstyle: 'Lefty' }
    ])

    const addPlayer = (newPlayer) => {
        setPlayer([...player, newPlayer])
    }
    return (
    <React.Fragment>
        <table style={{ width: '60%' }} className='table'>
            <thead className="thead-light">
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Batting Style</th>
                    <th>Bowling Style</th>
                </tr>
            </thead>
            <tbody>
                {player.map(p => {
                    return (<tr>
                        <td>{p.name}</td>
                        <td>{p.country}</td>
                        <td>{p.batstyle}</td>
                        <td>{p.bowlstyle}</td>
                    </tr>)
                })
                }
            </tbody>
        </table><br /><br />
        <AddPlayer addPlayer={addPlayer} />
    </React.Fragment>

    );
}

export default Team;