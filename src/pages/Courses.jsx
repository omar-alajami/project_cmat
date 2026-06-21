import Card from '../components/CourseCard.jsx';
import courses from '../assets/courses.json';
import '../styles/coursesPage.css';
import { useState } from 'react';
import filter from '../assets/filter.png'

function Courses(){
    const [type, setType] = useState("ALL");
    const filteredCourses = (
        type === "ALL"
        ? courses
        : courses.filter((obj) => {
            return obj["id"].substring(0, 4) === type;
        })
    );

    return(
        <div className='container mt-5'>
            <h1>All Courses:</h1><br />
            <div className='filter'>
                <img src={filter} alt="" />
                <p className='filtertext'>
                    Filter by Department:
                </p>
                <select value={type} onChange={(selected) => setType(selected.target.value)}>
                    <option value="ALL">All</option>
                    <option value="CSCI">CSCI</option>
                    <option value="MATH">MATH</option>
                    <option value="SSCI">SSCI</option>
                    <option value="ENGL">ENGL</option>
                    <option value="CULT">CULT</option>
                    <option value="ARAB">ARAB</option>
                </select>
            </div>
            <div className='gird'>
                {
                    filteredCourses.map(
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