import React, { Fragment } from 'react';


const ShowMovie = ({Poster, Title}) => {
    console.log(Poster, Title);
    return (
        <div>
            <img src={Poster}/>
            <p>{Title}</p>
        </div>
    ); 
        
}


export default ShowMovie;