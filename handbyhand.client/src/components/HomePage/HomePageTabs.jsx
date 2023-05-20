import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './HomePageTabs.css'
import axios from 'axios'
import Post from '../General/Post';

const MyTabs = () => {

    const [posts, setPosts] = useState([]);

    useEffect( () => {

        fetch('http://localhost:3000/post/getAllPosts')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPosts(data)
            console.log(posts)
            console.log("Data has been recieved")
        }).catch(err => {
            console.log(err)
        })
        /*axios.get("http://localhost:3000/post/getAllPosts")
        .then(response => response.json())
        .then((response) => {
            console.log(data)
            const data = response.data
            setPosts(data)
            console.log("Data has been recieved")
        }).catch(err => {
            console.log(err)
        })*/
    }, []) 

    /*displayAllPosts = (postsArr) => {

        if(!postsArr.length) return null;

        return postsArr.map((post, index) => {
            <div key={index}>
                <h3>{post.eventTitle}</h3>
                <p>{post.content}</p>
            </div>
        })
    }*/

    return (
        <div className="events">
            <Tabs defaultActiveKey="tab1" id="my-tabs">
                <Tab eventKey="tab1" title="All">
                    
                    {      
                    posts.map((post) => (
                        <div>
                            <Post post={post}/>
                            {/* <p>{post.eventTitle}</p>
                            <p>{post.content}</p> */}
                        </div>
                    ))              
                    }
                   
                </Tab>
                <Tab eventKey="tab2" title="Social">
                    <p>This is the content of Tab 2</p>
                </Tab>
                <Tab eventKey="tab3" title="Volunteer">
                    <p>This is the content of Tab 3</p>
                </Tab>
                <Tab eventKey="tab4" title="Contribution">
                    <p>This is the content of Tab 4</p>
                </Tab>
            </Tabs>
        </div>
    );
}

export default MyTabs;