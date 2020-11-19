import React, { useState, useEffect } from "react"
import Form from "./Form"

function List(){
    const[expenseValue, setExpenseValue] = useState([]);
    const[income, setIncome] = useState(0);
    const[expense, setExpense] = useState(0);
    const[totalBalance, setTotalBalance] = useState(0);
    
    
    const handleClick = (expense, expensePrice) => {
        const id = Math.floor(Math.random() * 10000000000);
        const date = Date()
        setExpenseValue([...expenseValue, {expense, expensePrice, date, id}]);
        if(expensePrice > 0){
            setIncome(expensePrice);

        }else{
            setExpense(expensePrice);

        }
        let i = parseInt(expensePrice, 10);
        setTotalBalance(totalBalance + i);
    }

    useEffect(() => {
        localStorage.setItem('finance', JSON.stringify(expenseValue));
        localStorage.setItem('income', JSON.stringify(income));
        localStorage.setItem('expense', JSON.stringify(expense));
        localStorage.setItem('totalBalance', JSON.stringify(totalBalance));
        },[expenseValue, income, expense, totalBalance])
    
    return(
        <div className="output">
            <div className="dashboard">
                <div className="totalBalance">
                    <h5>TOTAL BALANCE</h5>
                    <h1 className="totalBalanceVal">&#8373; {totalBalance}.00</h1>
                </div>
                <div className="income">
                    <h6>INCOME</h6>
                    <h2 className="incomeVal">&#8373; {income}.00</h2>
                </div>
                <div className="expense">
                    <h6>EXPENSE</h6>
                    <h2 className="expenseVal">&#8373; {expense}.00</h2>
                </div>
            </div>

            <Form handleClick={handleClick} />

            <div className="history">
                <h6 className="historyTitle">TRANSACTION HISTORY</h6>
                <hr></hr>
                <ul className="historyContainer">
                    {expenseValue.map(expVal => {
                        return(<li key={expVal.id} className="historyInput">
                            <p className="date"> {expVal.date} </p>
                            <h2 className="item" > {expVal.expense} </h2>
                            <h2 className="itemPrice">&#8373; {expVal.expensePrice}.00 </h2>
                            
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default List