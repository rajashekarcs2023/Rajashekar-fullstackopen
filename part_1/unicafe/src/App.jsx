import { useState } from 'react'


const Statistics = (props) => {

  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p> 
      <p>Total: {props.total}</p>
      <p>Average: {props.average.toFixed(1)}</p>
      <p>Positive: {props.positivePercentage.toFixed(1)}%</p>
    </div>
  )

}
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
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      average={average}
      positivePercentage={positivePercentage}
      />

    </div>
  )
}

export default App