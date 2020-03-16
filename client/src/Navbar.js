import React from 'react';

function Navbar(props){
    return(
        <div class={'has-background-black'}>
        <nav style={{display: 'inline-block'}} class="navbar container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand has-background-black has-text-white">
    <a class="navbar-item" href="/">
    <h1 style={{margin: '0 auto'}} className="title has-text-white">Coronavirus Alerts</h1>
    </a>
  </div>
</nav>
</div>
    )
}

export default Navbar;