import './BoardBox.css'

export default function BoardBox({ type, wind, stench }: { type: string, wind: boolean, stench: boolean }) {
  
    // let cl = 'BoardBox'
    
    // if(type === 'HOLE') {
    //     cl += ' HOLE'
    //     }

    //     return (
    //     <div className={cl}>
    //         {type === 'HOLE' && <p>Agujero</p>}
    //         {wind && '💨' }
    //         {stench && '🦨' }
    //     </div>
    // )

    //     if(type === 'START') {
    //         cl += ' START'
    //         return (
    //         <div className={cl}>
    //             {<p>Inicio</p>
                
    //         </div>
    //         )
        // }


      if (type === 'START') {
        return (
            <div className="BoardBox START">
                <p>Inicio</p>
                {wind && '💨'}
                {stench && '🦨'}
            </div>
        );  
    }
    
    if (type === 'EXIT') {
        return (
            <div className="BoardBox EXIT">
                <p>Salida</p>
                {wind && '💨'}
                {stench && '🦨'}
            </div>
        );
    }
    if (type === 'SAFE') {
        return (
            <div className="BoardBox SAFE">
                <p> </p>
                {wind && '💨'}
                {stench && '🦨'}
            </div>
        )
    }
    if (type === 'WUMPUS') {
        return (
            <div className="BoardBox WUMPUS">
                <p>👹</p>
                {wind && '💨'}
                {stench && '🦨'}
            </div>
        );
    }
    if (type === 'HOLE') {
        return (
            <div className="BoardBox HOLE">
                <p>Agujero</p>
                {wind && '💨'}
                {stench && '🦨'}
            </div>
        );
    }
    if (type === 'GOLD') {
        return (
            <div className="BoardBox GOLD">
                <p>Tesoro </p>
                {wind && '💨'}
                {stench && '🦨'}
            </div>
        )
    }

    
}
    
