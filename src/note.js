import'./note.css'
import NoteEntry from './noteEntry.js';
import { useEffect, useState } from 'react';

function NotePad() {
    const [arrayOfTopPositionsOnLoad, setArrayOfTopPositionsOnLoad] = useState([0, 102, 204, 306, 408, 510, 612]);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let scrolledPx = window.scrollY + window.innerHeight - 17;
            let scrollHeight = document.documentElement.scrollHeight;
            
            console.log('Scrolled: ' + scrolledPx);
            console.log('Height: ' + scrollHeight);

            if(scrolledPx === (scrollHeight)) {
                document.documentElement.style.height = (scrollHeight + 50) + "px";
                setArrayOfTopPositionsOnLoad((arrayOfTopPositionsOnLoad) => {
                    return [...arrayOfTopPositionsOnLoad,
                    Number(arrayOfTopPositionsOnLoad[arrayOfTopPositionsOnLoad.length - 1] + 102)]
                })
            }
        })
    })

    return(
        <div>
            <div id = "note" >
                {arrayOfTopPositionsOnLoad.map((element, index) => {
                    return(
                        <NoteEntry top={element} key={index} />
                    )
                })}

                <br /> 
            </div>
        </div>
    )
}

export default NotePad;