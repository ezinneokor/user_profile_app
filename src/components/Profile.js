import react from "react";
import "./Profile.scss"
import{FaTrashAlt} from "react-icons/fa";
import { useState } from "react";
import { profileData } from "../profileData";

const Profile = () => {

    const[userProfile, setUserProfile] = useState(profileData)


    const removeProfile = (id)=>{
        // console.log(id);
        const newUserProfile = userProfile.filter((profile) => profile.id !== id)

        setUserProfile(newUserProfile)
    }

    const removeAll = () =>{

        setUserProfile([])
    }
    

    return(
        <section className="profile-sec --flex-center --100vh --bg-primary">

            <div className="container">
                <h2 className="--text-light">User Profile App</h2>

                {userProfile.map((user) => {
                     const{id,img,name,job} = user;

                    return(

                        <div className="profile --card --flex-between --p" key={id}>
                        <img src={img} alt="Profile pic"/>
    
                        <div className="desc">
                        <h4 className="--text-light">Name: {name}</h4>
                        <p className="--text-light">Job: {job}</p>
                    </div>
                    <FaTrashAlt size={18} className="icons"  onClick={()=> removeProfile(id)}/>
                    </div>

                    )
                   

                })}
                
                

                <button className="--btn --btn-danger" onClick={removeAll}>Clear All</button>
                

            </div>

        </section>
    )

}

export default Profile