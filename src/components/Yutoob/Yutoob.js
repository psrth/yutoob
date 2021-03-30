import React, { useState } from 'react'

import Hero from '../Hero/Hero'
import Results from '../Results/Results'
import Video from '../Video/Video'


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
        (search.activePage === 1) ?
        <Hero
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onSubmitHandler}
            searchString={search.searchString}
            activePage={search.activePage} 
        /> : null
    )
}

export default Yutoob;