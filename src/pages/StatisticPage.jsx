import { Component } from 'react'
import { Chart } from '../cmps/Chart'
import { bitcoinService } from '../services/bitcoinService.js'

export class StatisticPage extends Component {
  state = {
    marketPrice: null,
    confirmedTransactions: null,
    isLoading: true,
  }

  async componentDidMount() {
    this.setState({
      marketPrice: await bitcoinService.getMarketPrice(),
      confirmedTransactions: await bitcoinService.getConfirmedTransactions(),
      isLoading: false,
    })
  }

  render() {
    const { marketPrice, confirmedTransactions, isLoading } = this.state

    if (isLoading) return <div>Loading...</div>
    return (
      <section className='charts-page'>
        <Chart data={marketPrice} />

        <Chart data={confirmedTransactions} />
      </section>
    )
  }
}
