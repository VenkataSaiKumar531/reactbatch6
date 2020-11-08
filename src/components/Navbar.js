import React from 'react';
const Navbar = ()=>{
    return(
        <div>
            <nav class="navbar navbar-expand-sm bg-danger navbar-light">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;