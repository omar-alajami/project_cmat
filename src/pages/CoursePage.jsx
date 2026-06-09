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
                    let us know by sending an email to <span style={{fontWeight: "bold"}}>22430396@students.liu.edu.lb</span>
                </p>
                <div className="butt">
                    <Button name="Go Back to Search" path="/Search"></Button>
                </div>
            </div>
        )
    }

    return (
        <div className="container mt-5 courseFound">
            <h1>{course.id}: {course.name}</h1>
            <h2>Description:</h2>
            <p>{course.description}</p>
            <h2>Course Learning Outcomes (CLOs):</h2>
            <ul className="list">
                {
                    course.clos.map((clo, index) => (
                        <li key={index}>{clo}</li>
                    ))
                }
            </ul>
            <h2>Material:</h2>
            <ul className="list">
                {
                    course.material.length > 0 
                    ? course.material.map((mat) => (
                        <li>
                            <a target="_blank" key={mat["name"]} href={`${mat["path"]}`}>{mat["name"]}</a>
                        </li>
                    ))
                    : <li>No material provided for this course.</li>
                }
            </ul>
            <h2>Exams/exercises:</h2>
            <ul className="list">
                {
                    course["samples"]?.length > 0
                    ? course["samples"].map((obj) => (
                        <li>
                            <a target="_blank" key={obj["name"]} href={`${obj["path"]}`}>{obj["name"]}</a>
                        </li>
                    ))
                    : <li>No samples provided</li>
                }
            </ul>
            <h2>Prerequisites:</h2>
            <ul className="list">
                {
                    course["prereq"]?.length > 0
                    ? course["prereq"].map((something) => (
                        <li>
                            <Link to={`/Courses/${something}`}>{something}</Link>
                        </li>
                    ))
                    : <li>No prerequisites</li>
                }
            </ul>
            <h2>Requirements:</h2>
            {
                (!course["software"]?.length && !course['hardware']?.length)
                ? <p>No Requirements.</p>
                : <>
                    {
                        (!course["software"]?.length)
                        ? null
                        : (
                            <>
                            <ul className="secondList">
                                <h3>Software:</h3>
                                <ul className="list">
                                    {
                                        course["software"].map((sofi) => (
                                            <li key={sofi}>{sofi}</li>
                                        ))
                                    }
                                </ul>
                            </ul>
                            </>
                        )
                    }
                    {
                        (!course["hardware"]?.length)
                        ? null
                        : (
                            <>
                            <ul className="secondList">
                                <h3>Hardware:</h3>
                                <ul className="list">
                                    {
                                        course["hardware"].map((sofi) => (
                                            <li key={sofi}>{sofi}</li>
                                        ))
                                    }
                                </ul>
                            </ul>
                            </>
                        )
                    }
                </>
            }
        </div>
    )
}

export default CoursePage; 