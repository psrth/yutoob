import React, { useState } from 'react'

import Hero from '../Hero/Hero'
import Results from '../Results/Results'
import Video from '../Video/Video'


const Yutoob = () => {

    const [search, setSearch] = useState( {
        searchString: "",
        activePage: 1,
        link: null,
    });

    const onChangeHandler = (e) => {
        setSearch(
            {
                searchString: e.target.value,
                activePage: search.activePage,
                link: search.link,
            }
        )
    }

    const modifyLink = (str) => {
        setSearch ({
            searchString: search.searchString,
            activePage: search.activePage,
            link: "https://www.youtube.com/embed/"+str,
        })
    }

    const onSubmitHandler = () => {
        console.log(search.link)
        setSearch(
            {
                searchString: search.searchString,
                activePage: search.activePage + 1,
                link: search.link,
            })
    }


    return(
        (search.activePage === 1) ?
        <Hero
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onSubmitHandler}
            searchString={search.searchString}
            activePage={search.activePage} 
        /> : (search.link === null) ?
        <div>
            <h1>hi {search.link}</h1>
        <Results 
            onSubmitHandler={() => onSubmitHandler}
            searchString={search.searchString}
            activePage={search.activePage} 
            link={search.link}
            modifyLink={modifyLink}
        />
            </div> : 
        <Video 
            link={search.link}
        />
    )
}

export default Yutoob;