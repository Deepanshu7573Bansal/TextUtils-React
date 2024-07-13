import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {

    const white=()=>{
        props.togglefun('light');
    }
    const red=()=>{
        props.togglefun('danger');
    }
    const green=()=>{
        props.togglefun('success');
    }
    const blue=()=>{
        props.togglefun('primary');
    }
    const black=()=>{
        props.togglefun('dark');
    }
    return (
        <div className="App">
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li> */}
                        </ul>
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <span class="border border-dark white" onClick={white}>----</span>
                            <span class="border border-white red" onClick={red}>----</span>
                            <span class="border border-white green" onClick={green}>----</span>
                            <span class="border border-white blue" onClick={blue}>----</span>
                            <span class="border border-white black" onClick={black}>----</span>
                            <label className="form-check-label" >Change theme </label>
                            {/* white,danger,success,primary,dark */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

// Navbar.defaultProps ={
//     title: 'Set title here'
// }