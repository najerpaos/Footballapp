/* eslint-disable jsx-a11y/iframe-has-title */
import React,{useState} from 'react'
import scheduleG from '../data/scheduleG.json'
import { useParams } from 'react-router-dom'


const GameDetailTable=()=>{
    const [details,setDetails]=useState(scheduleG)
    const {id}=useParams()
    const foo=details.filter((e)=>e.id===id)
    console.log(foo)
    
  
    return (<>
        <h1 style={{textAlign:'center'}}>Game Details {id}</h1>
        <table className="table table-striped table-hover text-center">
          <thead className="table-warning table-bordered-bottom border-dark">
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
            <iframe src={web.map} width="700" height="400" frameborder="0" allowfullscreen style={{ position: 'absolute', left: '27%', top: '30%'}}></iframe>
          )
          )}

          

          <></>


        </tbody>
        </table>

      
        </>
    
    )
    }
     
export default GameDetailTable