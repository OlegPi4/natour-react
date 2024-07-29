function Header() {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a className="nav__el" href="/">
          All tours
        </a>
      </nav>
      <div className="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo"></img>
      </div>

      <nav className="nav  nav--user">
        {/* if user
            a.nav__el.nav__el--logout Log out
            a.nav__el(href='/me')
               img.nav__user-img(src=`/img/users/${user.photo}` alt=`Photo of ${user.name}`)
               span= user.name.split(' ')[0]
         else  */}
        <a className="nav__el" href="/login">
          Log in
        </a>
        <a className="nav__el nav__el--cta " href="/signup">
          Sign up
        </a>
      </nav>
    </header>
  );
}

export default Header;
