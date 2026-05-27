import { useParams, Link } from "react-router-dom";
import courses from '../assets/courses.js';
import '../styles/specCoursePage.css';

function CoursePage(){
    const {id} = useParams();

    const course = courses.find(
        (object) => object.id === id
    )

    if(!course){
        return (
            <div className="container mt-5 four0four">
                <img src="" alt="" />
                <p>
                    Hmm... It looks like the course you're trying to view is not availabe. <br />
                    Double check that you entered the correct course code. <br /> <br />
                    If this course exists at the Lebanese International University, but does not have a page here, 
                    let us know by sending an email to <span >omar.r.ajami@gmail.com</span>
                </p>
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