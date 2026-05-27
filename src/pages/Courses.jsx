import Card from '../components/CourseCard.jsx';
import courses from '../assets/courses.js';
import '../styles/coursesPage.css';

function Courses(){
    return(
        <div className='container mt-5'>
            <h1>All Courses:</h1><br />
            <div className='gird'>
                {
                    courses.map(
                        (c) => (
                            <Card key={c.id} course={c}></Card>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Courses;