// Write your code here

import { Component } from "react"

import "./index.css"

class Counter extends Component {
  state = { mango:0,banana:0}

  onIncrementbanana = () => {
    this.setState((prevState) => ({prevState.banana: prevState.banana+ 1 }))
  }
  onIncrementmango = () => {
    this.setState((prevState) => ({prevState.mango: prevState.mango+ 1 }))
  }
  render() {
    const {banana,mango } = this.state
    return (
        <div className='maincontianer'>
            <div className='subcontainer'>
                <h1 className='heading'>Bob ate <span className='span'>{mango}</span> mangoes <span className='span'>{banana}</span> bananas</h1> 
                <div className='imagescontainer'>
                    <div className='imagecontainer'>
                        <img src='https://assets.ccbp.in/frontend/react-js/mango-img.png' alt='mango' className='image'/>
                        <button className='button'>Eat Mango</button>
                    </div>
                    <div className='imagecontainer'>
                        <img src='https://assets.ccbp.in/frontend/react-js/banana-img.png' alt ='banana' className='image'/>
                        <button className='button'>Eat Banana</button>
                    </div>
                </div>                
            </div>
        </div>
    )
  }
}

export default Counter