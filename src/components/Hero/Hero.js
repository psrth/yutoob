import react from 'react'
import { HeroContainer, HeroTextSection, HeroImage, HeroTitle, HeroSubTitle, HeroSearch } from './HeroElements'

const Hero = () => {
    return(
        <HeroContainer>
            <HeroTextSection>
                <HeroTitle>Hello</HeroTitle>
                <HeroSubTitle>Gello</HeroSubTitle>
                <HeroSearch></HeroSearch>
            </HeroTextSection>
            <HeroImage></HeroImage>
        </HeroContainer>
    )
}

export default Hero;

