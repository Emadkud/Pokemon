import {useState,useEffect} from 'react'
import './App.css'

function App() {
  
  const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		fetchData(1);
	}, []);

	const fetchData = async (id) => {
		const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const response = await request.json();
		setPokemon(response);
	};

	const handleButtonClick = () => {
		const randomId = Math.floor(Math.random() * (151 - 1 + 1)) + 1;
		fetchData(randomId);
	};


  return (
    <div className="container d-flex justify-content-center">
      
      {!pokemon ?(
        <>
        <h1>Loading ...</h1>
        </>
      ):(
      <section className=''>
         <img src={pokemon.sprites.front_default} alt={pokemon.name} />
         <h2 className=''>{pokemon.name}</h2>
         <p >height: <span className=''>{pokemon.height}</span></p>
         <p >Weight: <span className=''>{pokemon.weight}</span></p>
         <p>
          Types:
         <ul >
          {pokemon.types.map((type)=>{
           return <li key={type.slot}>{type.type.name}</li>
          })}
         </ul>
         </p>
         <button onClick={handleButtonClick}> Pokémon</button>
      </section>
      )}
      </div>
  )
}

export default App;