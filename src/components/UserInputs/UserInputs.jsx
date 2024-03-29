


import {InputLable} from "../InputLable/InputLable.jsx"


export default function ({onChange}) {
    


    return <section id = "user-input">
        <div className="input-group">
        <InputLable investment = "initialInvestment" onSelect = {onChange} />
        <InputLable investment = "annualInvestment" onSelect = {onChange} />
        </div>
        <div className="input-group">
        <InputLable investment = "expectedReturn" onSelect = {onChange} />
        <InputLable investment = "duration" onSelect = {onChange} />
        </div>
        
    </section>
}