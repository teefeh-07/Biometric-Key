import React from "react"
import { ConnectWallet } from "./components/ConnectWallet"

function App() {
  return (
    <div className="App">
      <h1>Biometric Key</h1>
      <div className="card">
        <ConnectWallet />
      </div>
    </div>
  )
}

export default App