import axios from 'axios';
import React from 'react';


function Buttons() {

    const postStatus = () => {
        axios.get("https://el-gato-ucr.herokuapp.com/post-status").then(res => {
            console.log(res);
        });
    }
    const postPic = () => {
        axios.get("https://el-gato-ucr.herokuapp.com/post-picture").then(res => {
            console.log(res);
        });
    }

    function handleClick(e) {
        e.preventDefault();
        alert('The link was clicked.');
    }

    return (<>
        <div className='container'>
            <a onClick={postStatus} className='button'>Post Story</a>
            <a onClick={postPic} className='button'>Post Feed</a>
        </div>
    </>);
}

export default Buttons;