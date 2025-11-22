import './index.css';

function About(){
    return(
        <div className="about_content">
            <h2>About this project</h2>
            <p className='about_p'>This is a URL Shortening Application, inspired by services like Bitly, 
                that allows users to convert long URLs into short, easy-to-share links. 
                The project demonstrates a full-stack approach, combining a robust backend with a 
                dynamic frontend, complete with authentication and efficient database management.
            </p>
            <div className='about_tech'>
                <h3>Users can:</h3>
                <ul>
                    <li>Generate shortened URLs quickly.</li>
                    <li>Access original URLs via the shortcodes.</li>
                    <li>View and manage URLs (if logged in).</li>
                    <li>Securely authenticate using JWT tokens.</li>
                </ul>
                <h3>Tech Stack</h3>
                <h5>Backend:</h5>
                <ul>
                    <li>Java 21 and Spring Boot 3.5.7 for building REST APIs.</li>
                    <li>Spring Data JPA for database interactions.</li>
                    <li>MySQL for storing URLs and shortcodes.</li>
                    <li>JWT (JSON Web Token) for secure authentication.</li>    
                </ul>
                <h5>Frontend:</h5>
                <ul>
                    <li>React.js for a responsive and interactive user interface.</li>
                    <li>React Router for seamless navigation.</li>  
                    <li>Axios for API requests to the backend.</li>
                    <li>CSS / Tailwind for styling.</li>
                </ul>
                <h5>Utilities & Tools:</h5>
                <ul>
                    <li>Base62 Encoding to generate unique shortcodes.</li>
                    <li>Maven for dependency management.</li>
                    <li>Postman for API testing.</li>
                </ul>
                <h5>Development Tools:</h5>
                <ul>
                    <li>IntelliJ IDEA / VS Code as IDEs.</li>
                    <li>Git for version control.</li>
                </ul>
                <p>This project showcases a full-stack solution with a clean architecture, 
                    user authentication, and efficient URL management,
                    making it a complete demonstration of modern web development practices.</p>
            </div>
        </div>
    );
}

export default About;