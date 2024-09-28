import './App.css'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import TaskBoard from './task/TaskBoard'
function App() {

  return (<>
    <Header />
    <div className="flex flex-col justify-center items-center">
      <Hero />
    </div>
    <TaskBoard />
    <Footer />
  </>)
}

export default App
