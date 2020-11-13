import React, {Component} from 'react';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="/home">DRIPMaP</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

                <form class="form-inline my-2 justify-content-center w-100">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0 active" type="submit">Search</button>
                </form>

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
                    <a class="nav-link" href="/profile">Profile <span class="sr-only"></span></a>
                </li>

                <li class="nav-item active">
                    <a class="nav-link" href="/donate">Donate <span class="sr-only"></span></a>
                </li>

                </ul>
            </div>
            </nav>
        </div>
    );
}

export default NavBar;
