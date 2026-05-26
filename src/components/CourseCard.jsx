import { Link } from "react-router-dom";

function Card({course}){
    return (
        <div className="card p-3">
            <h3>{course.id}: {course.name}</h3>

            <Link to={`/Courses/${course.id}`}>View</Link>
        </div>
    )
}

export default Card;