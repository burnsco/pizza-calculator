import React from 'react'

import calculatePizzasNeeded from '../lib/calculate-pizzas-needed'

import PizzaCalculator from './PizzaCalculator'

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2
}

export default class App extends React.Component {
  state = { ...initialState }

  updateNumberOfPeople = e => {
    const numberOfPeople = parseInt(e.target.value, 10)
    this.setState({ numberOfPeople })
  }
  updateSlicesPerPerson = e => {
    const slicesPerPerson = parseInt(e.target.value, 10)
    this.setState({ slicesPerPerson })
  }
  reset = e => this.setState({ ...initialState })

  render() {
    const { numberOfPeople, slicesPerPerson } = this.state
    const { updateNumberOfPeople, updateSlicesPerPerson, reset } = this
    return (
      <PizzaCalculator
        numberOfPeople={numberOfPeople}
        numberOfSlices={slicesPerPerson}
        handleUpdatePeople={updateNumberOfPeople}
        handleUpdateSlices={updateSlicesPerPerson}
        reset={reset}
        totalPizzasNeeded={calculatePizzasNeeded}
      />
    )
  }
}
