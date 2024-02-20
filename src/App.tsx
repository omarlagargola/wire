import './App.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainSection from './components/MainSection'

function App() {

  return (
    <>
      <Header />
      <div className='content'>
        <div className='container'>
          <Sidebar />
          <MainSection />
        </div>
      </div>
    </>
  )
}

export default App
