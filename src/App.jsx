import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {

  return (
    <div>
      <main>
      <Header />
        <Outlet />
      <Footer />
      </main>
    </div>
  )
}

export default App
