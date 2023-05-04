import React from "react";
import PostSide from "../../component/postSide/PostSide";
import ProfileSide from "../../component/profileSide/ProfileSide";
import RightSide from "../../component/rightSide/RightSide";
import "./Home.css"


const Home = () => {
    return(
    <div className="Home">
        <ProfileSide />
        <PostSide />
        <RightSide />
    </div>
    )
}

export default Home;