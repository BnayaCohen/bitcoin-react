import { Component } from 'react'
import { userService } from '../services/userService.js'

export class SignupPage extends Component {
  state = {
    name: '',
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState(prevState => ({ ...prevState, [field]: value }))
  }

  onSignup = async (ev) => {
    ev.preventDefault()
    if (this.state.name === '') return
    userService.signup(this.state.name)
    this.props.history.push('/')
  }

  inputRefFunc = (elInput) => {
    elInput && elInput.focus()
  }

  render() {
    const { name } = this.state

    return (
      <section className='signup-page'>
        <h2>Get started with Bitcoin</h2>
        <img src="https://bitcoin.org/img/helper/helper-illustration.svg" alt="" />
        <h1>Please enter your name</h1>
        <form onSubmit={this.onSignup}>
          <input ref={this.inputRefFunc} type="text" value={name} onChange={this.handleChange} name="name" />
          <button className='btn'>Sign up</button>
        </form>
      </section>
    )
  }
}
