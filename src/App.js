import React from 'react';
import './App.css';

import Posts from "./components/Posts";
import Form from "./components/Form";

import Context from "./context";

function App() {
    const [posts, setPosts] = React.useState([]);
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(response => response.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])

    function changeValue(event) {
        event.preventDefault();

        setValue(event.target.value);
    }


    return(
        <Context.Provider value={{ value }}>
            <div className="container">
                <div className="mb-5 mt-5 text-center display-3">ElasticSearch</div>
                <Form changeValue={changeValue} /> 
                <Posts posts={posts} />
            </div>
        </Context.Provider>
        
    );
}

export default App;
