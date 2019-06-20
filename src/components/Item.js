import React, { Component } from 'react'

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props.item
        }
    }

    addToCart=()=>{
        this.props.addToCart(this.state.item)
    }

    removeFromCart=()=>{
        this.props.removeFromCart(this.state.item)
    }

    render() {
        return (
            <div className={ (this.props.isCart==false) ? ("col-lg-4 col-md-6 mb-4") : ("col-12")}>
                <div className="card h-100" style={{backgroundColor: '#343a40', borderRadius: '15px'}}>
                    { (this.props.isCart==false) 
                        ? (<div className="item-img-bg">
                           <img className="card-img item-img" src={this.state.item.imglink} alt="this.state.item.name"/></div>) 
                        : ("")
                    }
                    <div className="card-body">
                        <div className="item-name">
                        <h4 className="card-title">
                            <a href="item.html">{this.state.item.name}</a>
                        </h4></div>
                        <h5 style={{fontWeight: 'lighter'}}>${this.state.item.price} [USD]</h5>
                        {
                            (this.props.isCart==false) ? (
                            <p className="card-text basic-text">{this.state.item.desc}</p>
                            ):
                            (
                                <p>Qty: {this.state.item.qty}</p>
                            )
                        }
                    </div>
                    <div className="card-footer" style={{padding:'0'}}>
                        {
                            (this.props.isCart==true) ? (
                                <button className="addToCart remove" onClick={this.removeFromCart}>Remove</button>
                            ) :
                            (
                                <button className="addToCart" onClick={this.addToCart}>Add to arsenal</button>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;