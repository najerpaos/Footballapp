import React from 'react'

const Homescreen=()=>{
    return <table className="table table-striped table-hover text-center">
      <thead className="table-success table-bordered-bottom border-dark">
        <tr>
          <th>Date</th>
          <th>Event</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>August 4</td>
              <td>NYSL Fundraiser</td>
          </tr>
          <tr>
              <td>August 16</td>
              <td>Season Kick-off: Meet the Teams</td>
          </tr>
          <tr>
              <td>September 1</td>
              <td>First Game of the Season (Check Game Schedule for details)</td>
          </tr>
      </tbody>
  </table>
}

export default Homescreen