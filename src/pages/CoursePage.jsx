import { useParams } from "react-router-dom";
import courses from '../assets/courses.js';

function CoursePage(){
    const {id} = useParams();

    const course = courses.find(
        (object) => object.id === id
    )

    if(!course){
        return (
            <h1 className="">other</h1>
        )
    }

    return (
        <h1>stuff</h1>
    )
}

export default CoursePage; 