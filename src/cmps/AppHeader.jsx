import { NavLink, withRouter } from "react-router-dom";

function _AppHeader() {
  return (
    <header className='app-header'>
      <section className='container flex column space-between'>
        <h1>BIT coin</h1>
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