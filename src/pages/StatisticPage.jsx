import { useEffect, useReducer,useState } from 'react'
import { Chart } from '../cmps/Chart'
import { bitcoinService } from '../services/bitcoinService.js'

export function StatisticPage() {
const [marketPrice,setMarketPrice]=useState(null)
const [confirmedTransactions,setConfirmedTransactions]=useState(null)



  useEffect(() => {
    (async () => {
      setMarketPrice(await bitcoinService.getMarketPrice())
      setConfirmedTransactions(await bitcoinService.getConfirmedTransactions())
    })()
  }, [])

  if (!marketPrice || !confirmedTransactions) return <div>Loading...</div>
  return (
    <section className='charts-page'>
      <Chart data={marketPrice} />

      <Chart data={confirmedTransactions} />
    </section>
  )
}