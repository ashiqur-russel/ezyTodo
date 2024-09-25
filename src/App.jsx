import './App.css'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
function App() {

  return (<>
    <Header />
    <div className="flex flex-col justify-center items-center">
      <Hero />
    </div>
    <Footer />
  </>)
}

export default App
