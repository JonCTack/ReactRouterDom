import React from 'react'
import data from '../../data'
import { Link } from 'react-router-dom'
import './index.css'


const Dashboard = () => {

    let stocksJSX = data.map(stock => {
        let link = `/stocks/${stock.symbol}`
        let changeColor = Math.sign(stock.change) === -1 ? "negativeRed" : "positiveGreen"
        return (<tr className="stock" key={stock.symbol}>
            <td>
                <Link to={link} className="linkStock">
                {stock.name} ({stock.symbol})
                </Link>
            </td>
            <td>${stock.lastPrice}</td>
            <td className={changeColor}>({stock.change.toFixed(2)})%</td>
            </tr>)
    })

  return (

        <table className="stockTable">
            <tr>
                <th>Company Name</th>
                <th>Price</th>
                <th>Change</th>
            </tr>
            {stocksJSX}
        </table>

  )
}

export default Dashboard