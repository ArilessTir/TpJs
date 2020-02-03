import React, { useState } from 'react';
import './App.css';
import { Stage, Layer, RegularPolygon, Circle } from 'react-konva';
import {coordonee,orientation,majOrientationPosition,deplacer, majPosition,obstacle} from './mestest.spec';

function App() {
 
    const [rover,setRover] = useState({cordonnee : coordonee(), orientation:orientation('E')});
  
  const pose={'N':0,'E':90,'S':180,'O':270};
  const [tab, settab]=useState();
  
  return ( 
  <div>      
    <div id='montexte'> 
          <center>
            Entrez les commandes: <input onChange={(value)=>settab(value.target.value)}/> 
            <button id="CommandButton" type="button" onClick={()=> setRover(majOrientationPosition(rover,Array.from(tab)))}> submit </button>
          </center>
    </div>
            <center>
              <section>
                  <Stage
                        className="canvas"
                        width={window.innerWidth}
                        height={window.innerHeight}
                  >
                      <Layer>
                          <RegularPolygon
                              rotation={pose[rover.orientation]}
                              x={rover.cordonnee[0]*10}
                              y={rover.cordonnee[1]*10}
                              sides={3}
                              width={100}
                              height={100}
                              fill="black"
                              stroke="white"
                          />
                         <Circle
                            x={obstacle[0]*10}
                            y={obstacle[1]*10}
                            width={20}
                            height={20}
                            fill="red"
                            stroke="white"
                         /> 
                      </Layer>
                  </Stage>
              </section>
            </center>
  </div>
  );
}

export default App;



