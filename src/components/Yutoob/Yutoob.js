import React, { useState } from 'react'
import { HeroContainer, HeroTextSection, HeroImage, HeroTitle, HeroSubTitle, HeroSearch, SubmitButton } from './HeroElements'

const Yutoob = () => {

    const [search, setSearch] = useState( {
        searchString: "",
        activePage: 1,
    });

    
    const onChangeHandler = (e) => {
        setSearch(
            {
                searchString: e.target.value,
                activePage: search.activePage
            }
        )

    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        search.activePage !== 3 ? 
        setSearch(
            {
                searchString: search.searchString,
                activePage: search.activePage + 1
            }
        ) :
        setSearch(
            {
                searchString: search.searchString,
                activePage: 1
            }
        )
    }

        return(
            <Hero
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
                searchString={search.searchString}
                activePage={search.activePage} 
            />
        )
    }
    

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


    const Search = (props) => {
        return(
            <div>
                {/* { search } */}
            </div>
        )
    }
    
    const Video = (props) => {
        return(
            <div></div>
        )
    }



export default Yutoob;