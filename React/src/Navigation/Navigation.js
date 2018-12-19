import {Link} from 'react-router-dom';
import React from 'react';


const Navigation = (props) => {
    return    <div> <nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ">
      <Link className="nav-item nav-link mx-5 px-5 " to='/institutions'>Home </Link>
      <Link className="nav-item nav-link mx-5 px-5" to='/admin'>Admin</Link>

    </div>
  </div>

</nav>
  <div>{props.children}</div>
</div>
}

export default Navigation;