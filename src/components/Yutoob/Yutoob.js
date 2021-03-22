import React, { useState } from 'react'
import { HeroContainer, HeroTextSection, HeroImage, HeroTitle, HeroSubTitle, HeroSearch, SubmitButton } from './HeroElements'

const Yutoob = () => {

    const [search, setSearch] = useState("");

    const Hero = () => {
        const keyword =""
        const onSubmit = () => {
            setSearch(keyword)
        }
    
        return(
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
                                onSubmit={onSubmit}
                                name="name" />
                        </label>
                    </form>
                    </HeroSearch>
                </HeroTextSection>
                <HeroImage></HeroImage>
            </HeroContainer>
        )
    }

    const Search = (props) => {
        return(
            <div>{ search }</div>
        )
    }
    
    const Video = (props) => {
        return(
            <div></div>
        )
    }
    

    return(
        (search === "") ? <Hero props={search} / > : <div></div>
    )
}


export default Yutoob;