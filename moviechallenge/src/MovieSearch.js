import React, { useRef, useState } from 'react';
import axios from "axios";
import ShowMovie from './ShowMovie';

const apiKey = "apikey=ae063465";

const MovieSearch = () => {
    //función para crear una referencia de un id único para que react sepa qué estoy nombrando 
    const inputRef = useRef(null); //referencia vacía para asignarlo a algo 
    //función para ver el estado del input //set message pone el valor a la variable message
    const [message, setMessage] = useState("");
    //set info peliculas pone el valor a la variable infoPeliculas
    const [infoPeliculas, setInfoPeliculas] = useState([]);
    
    const buscarPelicula = () => {
        //console.log(inputRef.current.value);
        const inputPeli = inputRef.current.value.replaceAll(" ","+");
        const url = `http://www.omdbapi.com/?${apiKey}&s=${inputPeli}&r=json`;

        //El metodo get "jala" la información
        fetch(url).then(response => response.json()
            .then(data => setInfoPeliculas(data.Search))
            
        );
            //setInfoPeliculas(response);
            //console.log(response.data);
           


    
        /*axios.get(url).then((response)=> {
            //console.log(response.data);
            setInfoPeliculas(response.data.Search);
        });*/
    }
    const inputRepetido = (e) => {
        //set message guarda el valor del input
        setMessage(e.target.value);
    }
    return (
        <div>
            <input id="inputMovies" ref={inputRef} value={message} onChange={inputRepetido}></input>
            <button className="movieSearch" onClick={buscarPelicula}>Buscar</button> 
            <h2>Película: {message}</h2>
            <div>{(infoPeliculas.length > 0) ? infoPeliculas.map((currentMovie) => {
            
                return (<ShowMovie Poster={currentMovie.Poster} Title={currentMovie.Title} />);
            })  : ""}</div>
        </div>
    ); 
}

export default MovieSearch;