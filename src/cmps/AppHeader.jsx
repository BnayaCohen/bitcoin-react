import { NavLink, useNavigate, withRouter } from "react-router-dom"

export function AppHeader() {
  return (
    <header className='app-header'>
      <section className="container flex space-between align-center">
        <div className="logo"></div>
        <nav className="flex">
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/contact'>Contacts</NavLink>
          <NavLink to='/statistics'>Statistics</NavLink>
        </nav>
      </section>
    </header>
  )
}