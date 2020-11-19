import React, { useState } from "react"

function Form({handleClick}){
    const[expense, setExpense] = useState("")
    const[expensePrice, setExpensePrice] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick(expense, expensePrice);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <h6>EXPENSE</h6>
                <input id="inputValue" onChange={e => {setExpense(e.target.value)}} required placeholder="Input expense here..." />
            </div>
            <div>
                <h6>EXPENSE PRICE</h6>
                <input id="inputPrice"type="number" onChange={e => {setExpensePrice(e.target.value)}} required placeholder="Input expense price here..." />
            </div>
            <button id="addTransaction">Add Transaction</button>
        </form>
    )
}

export default Form