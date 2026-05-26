import '../styles/home.css';
import Button from '../components/Button';

function Home(){
    return (
        <div className="container mt-5 homePage">
            <h1>Welcome to Project CMAT!</h1>
            <p>
                CMAT, abbreviation for "Course Material And Tests", is a website that sums up all the courses provided by the 
                Lebanese International University (LIU), and make all their needed material easy to access for all students (such as online 
                textbooks, guides, summary PDFs, required software, and exam samples).
            </p>
            <div className='getStarted'>
                <h2>
                    Get Started:
                </h2>
                <br />
                <div className='butts'>
                    <Button name="View All Courses" path="/Courses"></Button>
                    <h4>OR</h4>
                    <Button name="Search For Course" path="/Search"></Button>
                </div>
            </div>
        </div>
    )
}

export default Home;