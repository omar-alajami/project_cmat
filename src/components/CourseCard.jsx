import { Link } from "react-router-dom";
import '../styles/coursecard.css';

function CourseCard({course}){
    return (
        <Link to={`/Courses/${course.id}`} className="llink">
            <div className="ccard">
                <h2>{course.id}</h2>
                <h4>{course.name}</h4>
            </div>
        </Link>
    )
}

export default CourseCard;