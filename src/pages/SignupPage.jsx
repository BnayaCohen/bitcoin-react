import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../store/actions/userActions'

export function SignupPage() {

  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    if (field === 'name') setName(value)
  }

  const onSignup = async (ev) => {
    ev.preventDefault()
    if (name === '') return
    dispatch(signup(name))
    navigate('/')
  }

  const inputRefFunc = (elInput) => {
    elInput && elInput.focus()
  }

  return (
    <section className='signup-page'>
      <h2>Get started with Bitcoin</h2>
      <img src="https://bitcoin.org/img/helper/helper-illustration.svg" alt="" />
      <h1>Please enter your name</h1>
      <form onSubmit={onSignup}>
        <input ref={inputRefFunc} type="text" value={name} onChange={handleChange} name="name" />
        <button className='btn'>Sign up</button>
      </form>
    </section>
  )
}