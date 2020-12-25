import React, {useEffect, useState} from 'react'
import {withRightBar} from "./withRightBar";

const url = "http://jsonplaceholder.typicode.com/posts?_start=1&_limit=5";

function News() {

    const [data, setData] = useState({
        payload: {},
        error: false
    });

    useEffect(() => {
        try {
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    setData({...data, payload: json});
                })
        } catch (e) {
            setData({...data, error: true});
        }
    }, [data])

    return <div>{
        data.payload.length && !data.error &&
        data.payload.map((item,key) => {
            return <div key={key}>
                <h5>{item.title}</h5>
                <p>{item.body}</p>
            </div>
        })
    }</div>
}

export default withRightBar(News)