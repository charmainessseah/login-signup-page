import React from 'react';
import Animation from './smiley.gif';

function LoadGif() {
    return(
        <div>
            <img className="gif" src={Animation}></img>
        </div>
    )
}

export default LoadGif;