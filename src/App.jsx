import React, { useState } from 'react';
import { FaClipboard } from "react-icons/fa";
import { useForm } from './useForm';
import { getRandomChar, getSpecialChar } from './utils';
import { toast } from "react-hot-toast";

function App() {

    const [values, setValues] = useForm({
        length: 6,
        capital: true,
        small: true,
        number: false,
        symbol: false,
    });

    const [result, setResult] = useState('');

    const fieldsArray = [
        {
            field: values.capital,
            getChar: () => getRandomChar(65, 90),
        },
        {
            field: values.small,
            getChar: () => getRandomChar(97, 122),
        },
        {
            field: values.number,
            getChar: () => getRandomChar(48, 57),
        },
        {
            field: values.symbol,
            getChar: () => getSpecialChar(),
        },
    ];

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let generatedPassword = "";
        const checkedFields = fieldsArray.filter(({ field }) => field );

        for (let i = 0; i < values.length; i++) {
            const index = Math.floor(Math.random() * checkedFields.length);
            const letter = checkedFields[index]?.getChar();

            if (letter) {
                generatedPassword += letter;
            }

        }
        if (generatedPassword) {
            setResult(generatedPassword);
        }
        else {
            toast.error("Please select an option");
        }
    }

    const handleClipboard = async() => {
        if (result) {
            await navigator.clipboard.writeText(result);
            toast.success("Copied to your clipboard");
        }
        else {
            toast.error("No password to copy");
        }
    }

    return (
        <section>
            <div className="container">
                <form id="pg-form" onSubmit={handleOnSubmit}>
                    <div className="result">
                        <input type="text" id="result" placeholder="minimum 6 characters" readOnly value={result}></input>
                        <div className="clipboard" onClick={handleClipboard}> 
                            <FaClipboard></FaClipboard>
                        </div>
                    </div>
                    <div>
                        <div className="field">
                            <label htmlFor="length">Length</label>
                            <input type="number" id="length" min={6} max={20} name="length" value={values.length} onChange={setValues}></input>
                        </div>
                        <div className="field">
                            <label htmlFor="capital">Uppercase Letters</label>
                            <input type="checkbox" id="capital" name="capital" checked={values.capital} onChange={setValues}></input>
                        </div>
                        <div className="field">
                            <label htmlFor="small">Lowercase Letters</label>
                            <input type="checkbox" id="small" name="small" checked={values.small} onChange={setValues}></input>
                        </div>
                        <div className="field">
                            <label htmlFor="number">Numbers</label>
                            <input type="checkbox" id="number" name="number" checked={values.number} onChange={setValues}></input>
                        </div>
                        <div className="field">
                            <label htmlFor="symbol">Symbols</label>
                            <input type="checkbox" id="symbol" name="symbol" checked={values.symbol} onChange={setValues}></input>
                        </div>
                    </div>
                    <button type="submit">Generate Password</button>
                </form>
            </div>
        </section>
    )
}

export default App
