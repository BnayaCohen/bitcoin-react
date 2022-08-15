import { Component } from 'react'
import { getUser } from '../services/userService.js'
import { bitcoinService } from '../services/bitcoinService.js'

export class HomePage extends Component {
  state = {
    user: getUser(),
    bitcoinRate: 0,
  }

  async componentDidMount() {
    this.setState({ bitcoinRate: await bitcoinService.getRate(this.state.user.coins)})
  }

  render() {
    const { user, bitcoinRate } = this.state

    return (
      <section className='home-page'>
        <h1>Welcome {user.name}</h1>
        
        <h3>You have {user.coins} coins</h3>
        <h3>BTC: {bitcoinRate}</h3>
      </section>
    )
  }
}
