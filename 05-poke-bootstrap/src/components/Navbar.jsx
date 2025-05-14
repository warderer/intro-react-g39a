const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-warning'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Pokédex
        </a>
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
            <a className='nav-link active' aria-current='page' href='#'>
              Home
            </a>
            <a className='nav-link' href='#'>
              About
            </a>
            <a className='nav-link' href='#'>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>

  )
}
export default Navbar
