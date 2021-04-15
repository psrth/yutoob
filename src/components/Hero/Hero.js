import React from 'react'

import './Hero.css'
import logo from './ytb.png'

const Hero = (props) => {
    return (
        <div className="hero-flex">
            <div className="hero-left">
                <h1 className="yutoob">yutoob.org</h1>
                <h2 className="yutoob-sb">a tethical way to use youtube</h2>
                <div>
                <form onSubmit={props.onSubmitHandler}>
                    <label>
                        <input 
                            className="input"
                            autocomplete="off"
                            type="text" 
                            placeholder="type to search youtube" 
                            onChange={props.onChangeHandler} 
                            name="name" 
                            />
                    </label>
                    <button style={{display: "none"}} onClick={props.onSubmitHandler}>submit</button>
                </form>
                </div>
            </div>
            <div className="hero-right">
                <img 
                    className="img-ytb"
                    src={logo}
                ></img>
            </div>
        </div>
    )
}

export default Hero;