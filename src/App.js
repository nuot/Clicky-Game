import React from 'react'
import Container from './components/Container'
import Header from './components/Header'

const App = props => {
  return (
    <>
    <Header />
    <Container 
      handleClickOn={props.handleClickOn}
    />
    </>
  )
}

export default App