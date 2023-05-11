/* eslint-disable jsx-a11y/iframe-has-title */
import React,{useState} from 'react'
import scheduleG from './data/scheduleG.json'
import { useParams } from 'react-router-dom'


const GameDetailTable=()=>{
    const [details,setDetails]=useState(scheduleG)
    const {id}=useParams()
    const foo=details.filter((e)=>e.id===id)
    console.log(foo)
    
  
    return (<>
        <h1>Game Details {id}</h1>
        <table class="table table-bordered border-dark table-striped table-hover">
          <thead class="table-warning">
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Teams</th>
              <th>Game</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
          {foo.map((elem) => (<tr>
            <td>{elem.date}</td>
            <td>{elem.time}</td>
            <td>{elem.teams}</td>
            <td>{elem.game}</td>
            <td>{elem.location}</td>
          </tr>
          
          )
          )}

          {foo.map((web)=>(
            <iframe src={web.map} width="600" height="450" frameborder="0" allowfullscreen></iframe>
          )
          )}


          <></>


        </tbody>
        </table>


        </>
    
    )
    }
     
export default GameDetailTable