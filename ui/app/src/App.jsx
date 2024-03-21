import '../assets/styles/main.css'
import Hero from './components/Hero'
import Recurso from './components/Recurso'

function App() {
    return (
        <>
          <div>
           <Hero />

           <div className='container'>
            
             <div><Recurso /></div>
           </div>
          </div>
        </>
    )
}

export default App;