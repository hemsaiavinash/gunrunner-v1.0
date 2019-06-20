import React, {Component} from 'react'

class Checkout extends Component{
    constructor(props){
        super(props)

        this.state={
            orderTotal:props.orderTotal
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            orderTotal:newProps.orderTotal
        })
    }

    render(){
        return(
            <div style={{backgroundColor: '#cdcec6', borderRadius: '15px', color:"#343a40"}}>
                <h1>Checkout</h1>
                <p>Total:${this.state.orderTotal}</p>
                <button className="addToCart">Place Order</button>
            </div>
        )
    }
}

export default Checkout;