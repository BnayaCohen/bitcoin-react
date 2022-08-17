import { Component } from 'react'
import { connect } from "react-redux";
import { bitcoinService } from '../services/bitcoinService.js'
import { MovesList } from '../cmps/MovesList';
import { loadUser,logout } from '../store/actions/userActions'

export class _HomePage extends Component {
  state = {
    user: null,
    bitcoinRate: 0,
  }

  componentDidMount() {
    this.props.loadUser()
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.loggedInUser !== this.props.loggedInUser) {
      this.setState({
        user: this.props.loggedInUser,
        bitcoinRate: await bitcoinService.getRate(this.props.loggedInUser.coins)
      })
    }
  }

  onLogout(){
    console.log(this.props);
    this.props.history.push('/signup')
  }

  get movesList() {
    const { user } = this.state
    return user.moves.filter((move, i) => i < 3)
  }

  render() {
    const { user, bitcoinRate } = this.state

    if (!user) return <div>Loading...</div>
    return (
      <section className='home-page'>
        <h1>Welcome {user.name}</h1>

        <h3>You have {user.coins} coins</h3>
        <h3>BTC: {bitcoinRate}</h3>
        <button className='btn' onClick={()=>this.onLogout()}>Logout</button>
        <MovesList title={'Your last 3 moves:'} movesList={this.movesList} />
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.userModule.loggedInUser
  }
}

const mapDispatchToProps = {
  loadUser,
  logout,
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)