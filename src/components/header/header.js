/* eslint-disable */

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link className="nav__el" to="/">
          All tours
        </Link>
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
        <Link className="nav__el" to="/login">
          Log in
        </Link>
        <Link className="nav__el nav__el--cta " to="/signup">
          Sign up
        </Link>
      </nav>
    </header>
  );
}

export default Header;
