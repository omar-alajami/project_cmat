import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/searchPage.css';

function Search(){
    const [userTyped, updateUserTyped] = useState("");
    const navigate = useNavigate();
    const reDirect = (e) => {
        e.preventDefault();
        let temp = userTyped;
        temp = temp.trim();
        temp = temp.toUpperCase();
        temp = temp.replace(/[-\s]/g, "");

        if (temp === ""){return;}
        navigate(`/Courses/${temp}`);
    }

    return(
        <div className="container mt-5">
            <h1>View Course by ID</h1>
            <p>
                Enter a course code to quickly view its page <br />
                The code of a course is the 4 letters and 3 numbers that are unique to each course, like "CSCI390". <br />
                Input the code in one of the following formats: "CSCI390" or "CSCI-390" or "CSCI 390". The letters can be uppercase or lowercase. 
            </p>
            <form onSubmit={reDirect} className="formClass">
                <input type="text" className="search" placeholder="Enter Course Code" value={userTyped} onChange={(q) => updateUserTyped(q.target.value)}/>
                <button type="submit" className="searchButt">AA</button>
            </form>
        </div>
    )
}

export default Search;