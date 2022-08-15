import { NavLink, withRouter } from "react-router-dom";

function _AppHeader() {
  return (
    <header className='app-header'>
      <section className="container flex space-between align-center">
        <div className="logo"></div>
        <nav className="flex">
          <NavLink exact to='/' >Home</NavLink>
          <NavLink to='/contact'>Contacts</NavLink>
          <NavLink to='/statistics'>Statistics</NavLink>
        </nav>
      </section>
    </header>
  )
}

export const AppHeader = withRouter(_AppHeader)