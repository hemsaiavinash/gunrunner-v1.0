import React, { Component } from 'react'
import Catalog from './Catalog';
import Banner from './Banner';
import Cart from './Cart';
import Checkout from './Checkout';

class Home extends Component {
    constructor(){
        super();

        var items=[
            {
                id:1,
                imglink:"http://pngimg.com/uploads/assault_rifle/assault_rifle_PNG1442.png",
                name:"Assault Rifle",
                price:13170,
                desc:"This weapon is famous among the rogue groups in Russia. It's known for its wide use in hollywood movies."
            },
            {
                id:2,
                imglink:"http://pngimg.com/uploads/assault_rifle/assault_rifle_PNG1439.png",
                name:"Special Carbine Rifle",
                price:15500,
                desc:"Used mostly by our tactical squads, this gun has many fans than Justin Bieber himself."
            },
            {
                id:3,
                imglink:"http://pngimg.com/uploads/sniper_rifle/sniper_rifle_PNG20.png",
                name:"Sniper Rifle",
                price:19600,
                desc:"If you ever want to take a head from the top of a building situated a block away, you are looking at the right gun."
            },
            {
                id:4,
                imglink:"http://www.pngmart.com/files/7/Grenade-Launcher-PNG-Photos.png",
                name:"Grenade Launcher",
                price:49500,
                desc:"That satisfaction you have when a grenade is launched while your enemy is getting burnt is one a whole new level."
            },
            {
                id:5,
                imglink:"http://pngimg.com/uploads/shotgun/shotgun_PNG31.png",
                name:"Pump-action Shotgun",
                price:14900,
                desc:"Known for its stunning beauty and firepower, it is commonly used among the hunters in the wild."
            },
            {
                id:6,
                imglink:"http://pngimg.com/uploads/gun/gun_PNG1376.png",
                name:"Hand Revolver",
                price:4190,
                desc:"You ever fear going into a club where your rivals lurk? See no more, this is what you need to hide in your pocket."
            }
        ];

        this.state={
            items:items,
            cartItems:[],
            orderTotal:0
        }
    }

    addToCart=(item)=>{
        console.log(item);

        item.qty=1;

        var isItemExists=this.state.cartItems.some((cartItem)=>{
            return item.id==cartItem.id
        })

        if(isItemExists){
            item.qty++;

            this.setState({
                cartItems:[
                    ...this.state.cartItems.filter((cartItem)=>{
                        return item.id!=cartItem.id;
                    }),
                    item
                ]
            },()=>{
                this.setState({
                    orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                        return total + cartItem.price * cartItem.qty;
                    },0)
                })
            })
        }
        else {
            this.setState({
                cartItems:[
                    ...this.state.cartItems,
                    item
                ]
            },()=>{
                this.setState({
                    orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                        return total + cartItem.price * cartItem.qty;
                    },0)
                })
            })
        }
        
    }

    removeFromCart=(item)=>{
        console.log(item)
        this.setState({
            cartItems:this.state.cartItems.filter((cartItem)=>{
                return cartItem.id!=item.id
            })
        },()=>{
            this.setState({
                orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                    return total + cartItem.price;
                },0)
            })
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <Banner/>
                        <Catalog items={this.state.items} addToCart={this.addToCart}/>
                    </div>

                    <div className="col-lg-3">
                        <Cart items={this.state.cartItems} removeFromCart={this.removeFromCart}/>
                        <Checkout orderTotal={this.state.orderTotal} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;