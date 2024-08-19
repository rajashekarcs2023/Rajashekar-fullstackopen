import { useState } from 'react'


const Button = () => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )



}

const StatisticLine = (props) => {
  return (
    <p>
      {props.text}: {props.value}
    </p>
  )
}
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
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />    
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="Total" value={props.total} />
      <StatisticLine text="Average" value={props.average.toFixed(1)} />
      <StatisticLine text="Positive" value={props.positivePercentage.toFixed(1)} />
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