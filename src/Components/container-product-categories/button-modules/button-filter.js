import React from 'react';

function ButtonFiltre({button, filtre}) {

  return (<>
      {button.map((category, id) => {
        return (
          <div key={id}>
            <button onClick={() => filtre(category)} className={'buttonStyle'}>{category}</button>
          </div>
        )
      })}
    </>

  )


}

export default ButtonFiltre;