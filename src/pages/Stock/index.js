import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data'


const Stock = () => {
    let [stockInfo, setStockInfo] = useState(undefined)
    let { symbol } = useParams()
    let isFirstRender = useRef(true)

    const getStock = () => {
        let stockObj = data.find(stock => stock.symbol === symbol)
        setStockInfo(stockObj)
        console.log(stockObj)
    }

    useEffect(() => {
        if(isFirstRender.current === true){
          isFirstRender.current = false;
          getStock()
        }
      }, )

  return (
    stockInfo ? 
    <table className='stockTable'>
        <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Last Price</th>
            <th>Change</th>
            <th>High</th>
            <th>Low</th>
            <th>Open</th>
        </tr>
        <tr>
        <td>{stockInfo.name}</td>
        <td>{stockInfo.symbol}</td>
        <td>${stockInfo.lastPrice}</td>
        <td>{stockInfo.change.toFixed(2)}</td>
        <td>${stockInfo.high}</td>
        <td>${stockInfo.low}</td>
        <td>${stockInfo.open}</td>
        </tr>
    </table> 
    : 
    <div> </div>
    
  )
}

export default Stock