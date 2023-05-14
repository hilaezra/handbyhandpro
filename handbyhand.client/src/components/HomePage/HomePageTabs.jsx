import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './HomePageTabs.css'

// //test
// import Post from "../../../../handbyhand.server/models/PostModel"

const MyTabs = () => {
    // //testing
    // const post = {
    //     tab: 'social',
    //     title: 'My first post',
    //     author: 'John Doe',
    //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis metus a risus euismod gravida.',
    //     participants: 'yuval ohana',
    //     reviews: 'good'

    // };

    // const post2 = {
    //     tab: 'Volunteer',
    //     title: 'My post',
    //     author: 'yuval',
    //     content: 'i bla bla bla',
    //     participants: 'hila',
    //     reviews: 'good good'

    // };


    return (
        <div class="events">
            <Tabs defaultActiveKey="tab1" id="my-tabs">
                <Tab eventKey="tab1" title="All">
                    {/* <Post post={post} /> 
                    <Post post={post2} />  */}

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










