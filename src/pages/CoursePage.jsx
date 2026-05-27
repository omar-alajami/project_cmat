import { useParams, Link } from "react-router-dom";
import courses from '../assets/courses.js';
import '../styles/specCoursePage.css';
import img from '../assets/404err.png';
import Button from '../components/Button.jsx';

function CoursePage(){
    const {id} = useParams();

    const course = courses.find(
        (object) => object.id === id
    )

    if(!course){
        return (
            <div className="container mt-5 four0four">
                <img src={img} alt="404 course not found" />
                <p>
                    Hmm... It looks like the course you're trying to view is not availabe. <br />
                    Double check that you entered the correct course code.
                </p>
                <p className="oneline">
                    If this course exists at LIU but does not have a page here, 
                    let us know by sending an email to <span style={{fontWeight: "bold"}}>omar.r.ajami@gmail.com</span>
                </p>
                <div className="butt">
                    <Button name="Go Back to Search" path="/Search"></Button>
                </div>
            </div>
        )
    }

    return (
        <div className="container mt-5">
            <h1>{course.id}: {course.name}</h1>
        </div>
    )
}

export default CoursePage; 