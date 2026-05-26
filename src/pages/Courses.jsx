import Card from '../components/CourseCard.jsx';
import courses from '../assets/courses.js';

function Courses(){
    const course = courses[0];
    return(
        <>
            <h3>Courses page</h3>
            <Card course={course}></Card>
        </>
    )
}

export default Courses;