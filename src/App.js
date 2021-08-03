import Header from './components/Header'
import Nav from './components/Nav'
import Avatar from './components/Avatar'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className="fixed left-0 top-0 bottom-0 right-0 main overflow-y-auto smooth-scroll">
      <Nav/>
      <Header/>
      <Avatar/>
      <Introduction/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
