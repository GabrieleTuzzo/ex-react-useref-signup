import './App.css';
import { useState, useRef } from 'react';

const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+[]{}|;:\'",.<>?/`~';

function App() {
    const fullNameRef = useRef('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const specializationRef = useRef('');
    const expYearsRef = useRef('');
    const [description, setDescription] = useState('');

    const checkUsername = (username) => {
        return (
            username.length >= 6 &&
            !username.includes(symbols) &&
            !username.includes(' ')
        );
    };

    const checkPassword = (password) => {
        const hasSymbol = [...password].some((char) => symbols.includes(char));
        const hasNumber = [...password].some((char) => numbers.includes(char));
        const hasLetter = [...password].some((char) => letters.includes(char));

        return password.length >= 8 && hasSymbol && hasNumber && hasLetter;
    };

    const checkDescription = (desc) => {
        return description.length >= 100 && description.length <= 1000;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password);
        if (
            fullNameRef.current.value &&
            username &&
            password &&
            specializationRef.current.value &&
            expYearsRef.current.value &&
            description &&
            expYearsRef.current.value > 0 &&
            checkDescription(description) &&
            checkPassword(password) &&
            checkUsername(username)
        )
            console.log(`Nome Completo: ${fullNameRef.current.value}
        Username: ${username}
        Password: ${password}
        Specializzazione: ${specializationRef.current.value}
        Anni di esperienza: ${expYearsRef.current.value}
        Descrizione: ${description.trim()}`);
        else console.error('Campi non compilati correttamente');
    };

    return (
        <>
            <h1>My Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="full_name">Nome completo: </label>
                    <input id="full_name" type="text" ref={fullNameRef} />
                </div>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    {checkUsername(username) ? (
                        <p style={{ color: 'green' }}>Dati validi</p>
                    ) : (
                        <p style={{ color: 'red' }}>Dati non validi</p>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    {checkPassword(password) ? (
                        <p style={{ color: 'green' }}>Dati validi</p>
                    ) : (
                        <p style={{ color: 'red' }}>Dati non validi</p>
                    )}
                </div>
                <div>
                    <label htmlFor="spec_select">Specializzazione: </label>
                    <select
                        name="specializations"
                        id="spec_select"
                        ref={specializationRef}
                    >
                        <option value="">
                            --Selezionare la specializzazione--
                        </option>
                        <option value="full_stack">Full Stack</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="exp_years">Anni di esperienza: </label>
                    <input id="exp_years" type="number" ref={expYearsRef} />
                </div>
                <div>
                    <label htmlFor="desc">Breve descrizione: </label>
                    <br />
                    <textarea
                        name="desc"
                        id="desc"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    ></textarea>
                    {checkDescription(description) ? (
                        <p style={{ color: 'green' }}>Dati validi</p>
                    ) : (
                        <p style={{ color: 'red' }}>Dati non validi</p>
                    )}
                </div>
                <button>Invia Form</button>
            </form>
        </>
    );
}

export default App;
