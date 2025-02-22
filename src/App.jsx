import React from 'react'
import { FaClipboard } from "react-icons/fa";

function App() {
    return (
        <section>
            <div className="container">
                <form id="pg-form">
                    <div className="result">
                        <input type="text" id="result" placeholder="minimum 6 characters" readOnly></input>
                        <div className="clipboard"> 
                            <FaClipboard></FaClipboard>
                        </div>
                    </div>
                    <div>
                        <div className="field">
                            <label htmlFor="length">Length</label>
                            <input type="number" id="length" min={6} max={15}></input>
                        </div>
                        <div className="field">
                            <label htmlFor="capital">Uppercase Letters</label>
                            <input type="checkbox" id="capital"></input>
                        </div>
                        <div className="field">
                            <label htmlFor="small">Lowercase Letters</label>
                            <input type="checkbox" id="small"></input>
                        </div>
                        <div className="field">
                            <label htmlFor="number">Numbers</label>
                            <input type="checkbox" id="number"></input>
                        </div>
                        <div className="field">
                            <label htmlFor="symbol">Symbols</label>
                            <input type="checkbox" id="symbol"></input>
                        </div>
                    </div>
                    <button type="submit">Generate Password</button>
                </form>
            </div>
        </section>
    )
}

export default App
