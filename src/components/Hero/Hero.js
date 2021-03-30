import React from 'react'

const Hero = (props) => {
    return (
        <div>
            <div>
                <h1>yutoob.org</h1>
                <h2>a tethical way to use youtube</h2>
                <div>
                <form>
                    <label>
                        <input 
                            type="text" 
                            placeholder="type to search youtube" 
                            onChange={props.onChangeHandler} 
                            name="name" />
                    </label>
                    <button onClick={props.onSubmitHandler}>submit</button>
                </form>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Hero;