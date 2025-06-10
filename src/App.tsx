
// import './App.css'
import Joke from './components/Joke'
import { Meme } from './components/Meme'
import jokesData from "./data/data.json"
import memeDetails from "./data/Meme.json"


function App() {
  console.log(jokesData)

  return (
    <>
     {/* {
      // jokesData.map((joke)=>(
      //   <Joke joke={joke.joke} rating={joke.rating}/>
      // ))
      //jokes rating >3
      jokesData.filter((joke)=>joke.rating>3).map((joke)=>(
        <Joke key={joke.id} joke={joke.joke} rating= {joke.rating}/>
      ))
     } */}
   <div className='memeBody'>
     {
    
      memeDetails.map((meme)=>(
        <Meme key= {meme.id} title={meme.title} imageUrl={meme.imageUrl}/>

      ))
     }
</div>

     
    </>
  )
}

export default App
