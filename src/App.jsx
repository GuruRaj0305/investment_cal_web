import {useState} from "react"

import UserInput from "./components/UserInputs/UserInputs.jsx";
import Header from "./components/Header/Header.jsx";
import Result from "./components/Result/Result.jsx";
import {calculateInvestmentResults} from "./util/investment.js"

function App() {
  const [inputData , setInputData] = useState({
    initialInvestment : null,
    annualInvestment : null,
    expectedReturn : null,
    duration : null
})
function handleOnChange(event, investment) {
  setInputData((prevObject) => {
      return ({
          ...prevObject,
          [investment] : +event.target.value
  })
  })
}
const inputIsValid = inputData.duration > 0;

const annualData = calculateInvestmentResults(inputData)
  return <>
  <Header />
  <UserInput onChange = {handleOnChange} />
  {inputIsValid && <Result annualData = {annualData} />}
  {!inputIsValid && <p className="center">Please enter duration greater than zero</p>}
  </>;
}

export default App;
