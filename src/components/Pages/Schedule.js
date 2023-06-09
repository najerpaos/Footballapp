import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import scheduleG from '../data/scheduleG.json'
import scheduleL from '../data/scheduleL.json'


   const Schedule=()=>{
    const[locations,setlocations]=useState(scheduleL)
    const [games,setgames]=useState(scheduleG)
    
    return( <><div>
      <table className="table table-striped table-hover text-center">
        <thead className="table-danger table-bordered border-dark ">
          <tr>
            <th>Location name</th>
            <th>Location adress</th>
            <th>Google maps URL</th>
          </tr>
        </thead >
        <tbody>
          {locations.map((elem) => (<tr>
            <td>{elem.name}</td>
            <td>{elem.address}</td>
            <td><a href={elem.mapURL}>See location</a></td>
          </tr>
          )
          )}
        </tbody>
      </table>
    </div>

    <div>
      <table className="table table-striped table-hover text-center">
        <thead className="table-warning table-bordered-bottom border-dark">
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Teams</th>
            <th>Game</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {games.map((elem) => (<tr>
            <td>{elem.date}</td>
            <td>{elem.time}</td>
            <td>{elem.teams}</td>
            <td>{elem.game}</td>
            <td><Link to={`/game/${elem.id}`}>Details</Link></td>
          </tr>
          )
          )}

        </tbody>
      </table>
    </div></>
  
  )
  }
   

export default Schedule; 
