import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/'
})

// AIzaSyBd0D-4XVB6Une2u72WUPZk550rdRDsLsM
// https://www.youtube.com/watch?v=

const Results = (props) => {

    let searchString = props.searchString;
    searchString === "" ? searchString = 'Rick Astley Never Gonna Give You Up' : searchString = searchString;

    searchString = "search?part=snippet&maxResults=25&q="+searchString+"&key=AIzaSyBd0D-4XVB6Une2u72WUPZk550rdRDsLsM";

    const [results, setResults] = useState([]);
    console.log("Results: ", results);

    const getResults = async () => {
        const response = await api
            .get(searchString)
            .catch((err) => console.log("Error: ", err));
        
        if (response && response.data) setResults(response.data);
    };

    useEffect(() => {
        getResults();
    }, []);

    return (
        <div>{props.searchString}</div>
    )
}

export default Results;