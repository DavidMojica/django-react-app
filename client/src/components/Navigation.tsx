import { Link } from "react-router-dom";
import React from 'react';

const Navigation = ():React.JSX.Element => {
  return (
    <div>
        <Link to={'/tasks'}>
            <h1>Task app</h1>
        </Link>
      <Link to={"/tasks-create"}>Create task</Link>
    </div>
  )
}

export default Navigation
