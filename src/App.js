import { useState } from "react"

function App()
{
    const [inputNumber, setInputNumber] = useState(0);
    const [winScore, setWinScore] = useState(20); 
    const [p1Count, setP1Count] = useState(0);
    const [p2Count, setP2Count] = useState(0);

    const handleSubmit = (evt) => 
    {
        evt.preventDefault();
        // win score is start here.
        setWinScore(inputNumber);
    }

    const handleChange = (evt) => 
    {
        evt.preventDefault(); 
        const number =Number(evt.target.value);
        setInputNumber(number);
    }
    // player function declare here
    const handlePlayer1 = () => setP1Count(p1Count + 1);
    const handlePlayer2 = () => setP2Count(p2Count + 1);

    const reset = () => 
    {
        setWinScore(20)
        setP1Count(0)
        setP2Count(0)
    }

    return(
        <div className="container">
          <h2>Player VS Player</h2>
          <h3>Winnig Score : {winScore}</h3>
          <div className="players">
            <p>Player-1 : {p1Count}</p>
            <p>Player-2 : {p2Count}</p>
          </div>

        <form>
            <input 
            onChange={handleChange} 
            type="number" id="user-input" 
            autoComplete="off" 
            placeholder="Passed A Number..." 
            />

            <input 
             onClick={handleSubmit}
             type="submit" 
             value="submit" 
            />
        </form>
        <button onClick={handlePlayer1}>Player-1</button>
        <button onClick={handlePlayer2}>Player-2</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
}
export default App
