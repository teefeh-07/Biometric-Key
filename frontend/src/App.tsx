import React, { useState } from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Dashboard } from "./components/Dashboard"
import { Footer } from "./components/Footer"
import { userSession } from "./components/ConnectWallet"

function App() {
  const [isSignedIn] = useState(userSession.isUserSignedIn());

  return (
    <div className="App">
      <Navbar />
      <main>
        {isSignedIn ? <Dashboard /> : <Hero />}
      </main>
      <Footer />
    </div>
  )
}

export default App