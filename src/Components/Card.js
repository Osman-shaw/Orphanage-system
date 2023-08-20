import React from "react";

function Card ({count, title,  Icon,cn}) {
     return(
            <div className='card'>
             <div className={cn}>
                   <div className='card__desc'>
                      <h1>{count}</h1>
                     </div>
                        {Icon}
                       <div className='card__title'>
                        <p>{title}</p>
                     </div>
            </div>
            </div>
     );

}

export default Card;