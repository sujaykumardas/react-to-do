import { Link } from "react-router-dom";
import React from 'react'

const Links = () => {
  return 
  <div>
    <ul>
      <li>
        <Link to="/todo">Add Todo</Link>
      </li>
      <li>
        <Link to="/todos">List Todos</Link>
      </li>
    </ul>  
  </div>
}
export default Links