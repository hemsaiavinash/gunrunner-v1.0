import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BoilerPlate from '..components/BoilerPlate'

class SamplePage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <BoilerPlate/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default SamplePage;