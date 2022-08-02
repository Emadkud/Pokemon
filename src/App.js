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
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className='fs-2' >Pokémon</h1>
      {!pokemon ?(
        <>
        {/* <h1>Loading ...</h1> */}
        </>
      ):(
      <section className='card m-4 p-5 h-75 text-dark'>
         <img  src={pokemon.sprites.front_default} alt={pokemon.name} />
         <h2 className='className="fs-2'> Name : {pokemon.name}</h2>
         <p className='fs-2' >height: {pokemon.height}</p>
         <p className='fs-2'>Weight: {pokemon.weight}</p>
         <p className='fs-2' >
          Types:
         <ul >
          {pokemon.types.map((type)=>{
           return <li key={type.slot}>{type.type.name}</li>
          })}
         </ul>
         </p>
         <button className=" btn fs-2 " onClick={handleButtonClick}> Pokémon</button>
      </section>
      )}
      </div>
  )
}

export default App;