const Navbar = () => {
  return (
      <header className="header">
          <nav className='w-1/6 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
              <a href="/">
                  <p className="blue-gradient_text">GearheadsGo</p>
              </a>
          </nav>
          <nav className="flex tex-lg gap-7 font-medium">
              <a href="./about" className="text-blue-500" >About</a>
              <nav className="text-blue-500">
                  <a href="./contact">Contact</a>
              </nav>
              <nav className="text-blue-500">
                  <a href="./signin">Signin</a>
              </nav>
              </nav>
              <nav className="text-blue-500">
                  <a href="./signup">Signup</a>
              </nav>
    </header>
  )
}

export default Navbar