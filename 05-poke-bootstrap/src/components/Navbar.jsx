import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-warning'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          Pokédex
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink className='nav-link active' aria-current='page' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/about'>
              About
            </NavLink>
            <NavLink className='nav-link' to='/contact'>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>

  )
}
export default Navbar
