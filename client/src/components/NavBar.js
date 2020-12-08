import React, {Component} from 'react';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="">    
                <a class="navbar-brand my-2" href="/home">
                    DRIPMaP
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                
                <li class="nav-item active">
                    <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                </li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Resources
                    </a>
                    <div class="dropdown-menu ml-auto" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/profile">Fires</a>
                        <a class="dropdown-item" href="/profile">Hurricanes</a>
                        <a class="dropdown-item" href="/profile">Tornados</a>
                        <a class="dropdown-item" href="/profile">Earthquakes</a>
                        <a class="dropdown-item" href="/profile">Flooding</a>
                    </div>
                </li>

                <li class="nav-item active">
                    <a class="nav-link" href="/donate">Donate <span class="sr-only"></span></a>
                </li>

                <li class="nav-item active">
                    <a class="nav-link" href="/profile">Profile <span class="sr-only"></span></a>
                </li>

                </ul>
            </div>
            </nav>
        </div>
    );
}

export default NavBar;
