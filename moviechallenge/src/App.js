
import imagen from './Peliculas 3.jpeg';
import './App.css';
import MovieSearch from './MovieSearch';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagen} className="App-logo" alt="logo" />
        
        <h1>El mundo de las películas</h1>
        <MovieSearch />
      </header>
    </div>
  );
}
//componente app
export default App;
