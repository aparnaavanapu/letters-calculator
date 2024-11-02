import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component{
    state={count:0}
    countLetters=(event)=>{
        const inputLength=event.target.value.length
        this.setState({count:inputLength})
       
    }

    render(){
        const {count}=this.state

        return(
            <div className="bg-container">
                    <div className="text-container">
                        <h1 className="heading">Calculate the letters you enter</h1>
                        <p className="message">Enter the phrase</p>
                        <input type="text" placeholder='Enter the Phrase' className="input-box" onChange={this.countLetters}/>
                        <button type='button' className="btn">No.of Letters:{count}</button>
                    </div>
                    <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="letters calculator" className="image"/>
            </div>
        )
    }
}

export default LettersCalculator