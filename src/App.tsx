import heroImg from './assets/hero.png'
import './App.css'

const LAYERS = 3
const SIZE = 3

function App() {
  return (
    <section className="cube">
      {Array.from({ length: LAYERS }, (_, layer) => (
        <div className="layer" key={layer}>
          {Array.from({ length: SIZE * SIZE }, (_, index) => (
            <div className="cell" key={index}>
              <img src={heroImg} alt="" />
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

export default App
