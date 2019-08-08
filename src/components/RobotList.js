import React from 'react';
import Robots from '../Robots';

const Robotlist = ({ robots }) => {
    if (false ) {
        throw new Error('yeahhhhh');
    }
   

   return (
    <div>
        {
            robots.map((user, i) => {
                return <Robots
                 key={i}
                  id={robots[i].id}
                   name={robots[i].name}
                    email={robots[i].email}/>
            })
        }
    </div>
   );
}

export default Robotlist;