import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="py-4 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">&copy;All rights reserved <span style={{fontFamily: 'Alfa Slab One , cursive'}}>GUNRUNNER&trade;</span> <strong>2019</strong></p>
                </div>
            </footer>
        )
    }
}

export default Footer;