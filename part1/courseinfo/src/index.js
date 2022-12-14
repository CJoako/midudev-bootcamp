import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({course}) => {
  return <h1>{course}</h1>
}

const Mensajes = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
  return <p>{part1} {exercises1} {part2} {exercises2} {part3} {exercises3}</p>
}

const Suma = ({exercises1, exercises2, exercises3}) => {
  const suma = exercises1 + exercises2 + exercises3
  return <p>Number of exercises {suma}</p>
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course} />
      <Mensajes part1={part1} exercises1={exercises1} />
      <Mensajes part2={part2} exercises2={exercises2} />
      <Mensajes part3={part3} exercises3={exercises3} />
      <Suma exercises1={exercises1} exercises2={exercises2}  exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
