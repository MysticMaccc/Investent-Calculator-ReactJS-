import React from "react"
import Header from "./components/Header/Header"
import UserInput from "./components/UserInput/UserInput"
import Result from "./components/Results/Result"
import Thead from "./components/Results/Thead"
import TableBody from "./components/Results/TableBody"
import TableData from "./components/Results/TableData"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
        //the plus sign will convert the string to value, because event.target.value is string by default
      }
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />

      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p>Please enter a duration greater than zero!</p>}
      {
        inputIsValid && <Result>
          <Thead />
          <TableBody userInput={userInput} />
        </Result>
      }
    </>
  )
}

export default App
