import './App.css'
import BoardBox from './components/BoardBox'

function App() {
  return (
    <>
      <BoardBox type="START" wind={false} stench={false}/>
      <BoardBox type="HOLE" wind={false} stench={false}/>
      <BoardBox type="EXIT" wind={false} stench={false}/>
      <BoardBox type="WUMPUS" wind={false} stench={false}/>
      <BoardBox type="SAFE" wind={false} stench={false}/>
      <BoardBox type="GOLD" wind={false} stench={false}/>
    </>
  )
}

export default App
