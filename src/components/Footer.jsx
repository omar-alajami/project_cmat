import '../styles/footer.css';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import liu from '../assets/liu.png';

function Footer(){
    return (
        <footer className='container mt-5 footer'>
            <p>Copyright &copy; 2026 | CMAT<br /> All Rights Reserved</p>
            <div className='links'>
                <a target='_blank' href="https://github.com/omar-alajami/project_cmat">
                    <img src={github} alt=""  className='linklog'/>
                </a>
                <a target='_blank' href="https://www.instagram.com/omar.r.ajami">
                    <img src={instagram} alt="" className='linklog'/>
                </a>
                <a target='_blank' href="https://liu.edu.lb/LIU">
                    <img src={liu} alt="" className='linklog'/>
                </a>
                <a target='_blank' href="https://www.linkedin.com/">
                    <img src={linkedin} alt="" className='linklog' />
                </a>
                <a target='_blank' href="mailto:22430396@gmail.com">
                    <img src={mail} alt="" className='linklog'/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;