import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './HomePageTabs.css'
import axios from 'axios'
import Post from '../General/Post';

const MyTabs = () => {

    const [posts, setPosts] = useState([]);
    const [socialPosts, setSocialPosts] = useState([]);
    const [volunteerPosts, setVolunteerPosts] = useState([]);
    const [contributionPosts, setContributionPosts] = useState([]);


    useEffect(() => {

        fetch('http://localhost:3000/post/getAllPosts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            }).catch(err => {
                console.log(err)
            })
        /*axios.get("http://localhost:3000/post/getAllPosts")
        .then(response => {
            console.log(data)
            setPosts(data)
            console.log(posts)
            console.log("Data has been recieved")
        }).catch(err => {
            console.log(err)
        })*/
    }, [])

    useEffect(() => {

        fetch('http://localhost:3000/post/getSocialPosts')
            .then(response => response.json())
            .then(data => {
                setSocialPosts(data)
            }).catch(err => {
                console.log(err)
            })

    }, [])

    useEffect(() => {

        fetch('http://localhost:3000/post/getVolunteerPosts')
            .then(response => response.json())
            .then(data => {
                setVolunteerPosts(data)
            }).catch(err => {
                console.log(err)
            })

    }, [])

    useEffect(() => {

        fetch('http://localhost:3000/post/getContributionPosts')
            .then(response => response.json())
            .then(data => {
                setContributionPosts(data)
            }).catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <div className="events">
            <Tabs defaultActiveKey="tab1" id="my-tabs">
                <Tab eventKey="tab1" title="All">
                    {
                        posts.map((post, index) => (
                            <div key={index}>
                                <Post post={post} />
                            </div>
                        ))
                    }
                </Tab>
                <Tab eventKey="tab2" title="Social">
                    {
                        socialPosts.map((post, index) => (
                            <div key={index}>
                                <Post post={post} />
                            </div>
                        ))
                    }
                </Tab>
                <Tab eventKey="tab3" title="Volunteer">
                {
                        volunteerPosts.map((post, index) => (
                            <div key={index}>
                                <Post post={post} />
                            </div>
                        ))
                    }
                </Tab>
                <Tab eventKey="tab4" title="Contribution">
                {
                        contributionPosts.map((post, index) => (
                            <div key={index}>
                                <Post post={post} />
                            </div>
                        ))
                    }
                </Tab>
            </Tabs>
        </div>
    );
}

export default MyTabs;