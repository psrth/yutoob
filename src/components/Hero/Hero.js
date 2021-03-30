import React from 'react'
import { HeroContainer, HeroTextSection, HeroImage, HeroTitle, HeroSubTitle, HeroSearch, SubmitButton } from './HeroElements'

const Hero = (props) => {
    return (
        <HeroContainer>
                <HeroTextSection>
                    <HeroTitle>yutoob.org</HeroTitle>
                    <HeroSubTitle>a tethical way to use youtube</HeroSubTitle>
                    <HeroSearch>
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
                    <p>{props.searchString}</p>
                    <p>{props.activePage}</p>
                    </HeroSearch>
                </HeroTextSection>
                <HeroImage></HeroImage>
            </HeroContainer>
    )
}

export default Hero;