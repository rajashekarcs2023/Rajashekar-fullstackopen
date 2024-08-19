import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good+1)
  const handleNeutalClick = () => setNeutral(neutral+1)
  const handleBadClick = () => setBad(bad+1)

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1> Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutalClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p> 
      <p>Total: {total}</p>
      <p>Average: {average.toFixed(1)}</p>
      <p>Positive: {positivePercentage.toFixed(1)}%</p>
    </div>
  )
}

export default App