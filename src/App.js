import {useState,useEffect} from 'react'
import './App.css'

function App() {
  
  const [pokemon,setPokemon] = useState(null)
  const [myClass,setMyClasse] = useState("newpk")

  useEffect(()=>{
    fetchPokemons(1)
  },[]
  )

  const dispation = () =>{
    setMyClasse("oldpkmn")
  } 

  useEffect(()=>{
    setMyClasse("newpk")
  },[pokemon])

  useEffect(()=>{
    const changePokemon = () =>{
      const randomID = Math.floor(Math.random()*151)+1
      fetchPokemons(randomID)
    }
   if(myClass==='pkm')
   {
   setTimeout(()=>{changePokemon()},900)
  }
  },[myClass])


  const fetchPokemons = async (ID) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
    const data = await response.json()
    setPokemon(data)
  }

  console.log(pokemon);

  return (
    <div className="App">
      <h1>Name</h1>
      {pokemon !== null &&
      <section>
         <img src={pokemon.sprites.front_default} alt={pokemon.name} className={myClass} />
         <h2 className={myClass}>{pokemon.name}</h2>
         <p >height: <span className={myClass}>{pokemon.height}</span></p>
         <p >Weight: <span className={myClass}>{pokemon.weight}</span></p>
         <p>
          Types:
         <ul >
          {pokemon.types.map((type)=>{
           return <li key={type.slot} className={myClass}>{type.type.name}</li>
          })}
         </ul>
         </p>
      </section>
      }
      <button onClick={di}>Pokémon</button>
    </div>
  );
}

export default App;