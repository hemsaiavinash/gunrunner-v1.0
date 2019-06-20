import React, { Component } from 'react'

class Banner extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active banner">
                        <img className="d-block img-fluid banner-img" src="http://blog.1800gunsandammo.com/wp-content/uploads/2016/09/dove-shotguns-shells-2.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item banner">
                        <img className="d-block img-fluid banner-img" src="https://i.pinimg.com/originals/e9/e6/ec/e9e6ec89726c77aba3e179c2ca2e2088.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item banner">
                        <img className="d-block img-fluid banner-img" src="https://nationalinterest.org/sites/default/files/styles/desktop__1486_x_614/public/main_images/noobtube.jpg?itok=CPcu6HBh" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        )
    }
}

export default Banner;