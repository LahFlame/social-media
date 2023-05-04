import React from "react";
import "./ProfileSide.css"
import LogoSearch from "../logoSearch/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";
import FollowersCard from "../followerCard/FollowersCard";


const ProfileSide = () => {
    return(
        <div className="profileSide">
            <LogoSearch />
            <ProfileCard />  
            <FollowersCard />
        </div>
    )
}

export default ProfileSide;