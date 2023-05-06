import React, { useRef, useState, useEffect, Fragment } from 'react';
import axios from "axios";
import ShowMovie from './ShowMovie';

const apiKey = "apikey=ae063465";

const MovieSearch = () => {
    //función para crear un id único
    const inputRef = useRef(null);
    //función para ver el estado del input 
    const [message, setMessage] = useState("");
    const [infoPeliculas, setInfoPeliculas] = useState([]);
    const buscarPelicula = (e) => {
        console.log(inputRef.current.value);
        const inputPeli = inputRef.current.value.replaceAll(" ","+");
        const url = `http://www.omdbapi.com/?${apiKey}&s=${inputPeli}&r=json`;
        let setPeliculas = "";
        /*fetch(url, {method:"GET",referrerPolicy:"unsafe-url"}).then( response => {
            //setInfoPeliculas(response);
            console.log(response.data);

        });*/
        axios.get(url).then((response)=> {
            console.log(response.data);
            setInfoPeliculas(response.data.Search);
        });
    }
    const handleClick2 = (e) => {
        setMessage(e.target.value);
    }
    return (
        <div>
            <input id="inputMovies" ref={inputRef} value={message} onChange={handleClick2}></input>
            <button className="movieSearch" onClick={buscarPelicula}>Buscar</button> 
            <h2>Película: {message}</h2>
            <div>{(infoPeliculas.length > 0) ? infoPeliculas.map((currentMovie) => {
            
                return (<ShowMovie Poster={currentMovie.Poster} Title={currentMovie.Title} />);
            })  : ""}</div>
        </div>
    ); 
}

export default MovieSearch;