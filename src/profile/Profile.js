import React from "react";
import './style.css';
import img from './img.jpg';
import Header from '../Header';

function Profile() {
    return (
        <>
            <Header />
            <h1>Aneesh Bhat</h1>
            <img src={img} alt="Aneesh Bhat" width="150" height="150" />
    
            <h2>Summary</h2>
            <p>I am looking forward to my first work experience. Innovative Android Developer with a background in designing and building applications focused on user experience. Strong understanding of the full mobile development life cycle from concept to delivery. Skills include coding, debugging, and improving performance of Android applications, leveraging knowledge of Java and Kotlin languages.</p>

            <div className="skills">
                <h2>Skills</h2>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>Python</li>
                    <li>Android Studio</li>
                </ol>
            </div>

            <div className="language">
                <h2>Communication</h2>
                <ol>
                    <li>English</li>
                    <li>Kannada</li>
                    <li>Hindi</li>
                </ol>
            </div>

            <div className="education">
                <h2>Education</h2>
                <ul>
                    <li><strong>Master of Computer Applications (MCA) (Expected: 2026)</strong><br />
                        Poornaprajna Institute Of Management, Udupi</li>
                    <li><strong>Bachelor of Computer Applications (BCA) (2024)</strong><br />
                        St. Mary's College, Shirva</li>
                    <li><strong>PUC (2022)</strong><br />
                        Jnana Ganga Pre-University College, Moodubelle</li>
                    <li><strong>SSLC (2019)</strong><br />
                        Government High School, Volakadu, Udupi</li>
                </ul>
            </div>

            <div className="project">
                <h2>Projects</h2>
                <ol>
                    <li>Tic Tac Toe (Website)</li>
                    <li>Yatra Traveling Website</li>
                    <li>Calculator (Using Kotlin)</li>
                    <li>Todo List (Using Java)</li>
                    <li>Stopwatch (Using Kotlin & Java)</li>
                </ol>
            </div>

            <div className="achievement">
                <h2>Achievements</h2>
                <p>Won 1st place in Coding at the state level <strong>(Shree Devi Institute of Technology).</strong></p>
            </div>

            <div className="workshop">
                <h2>Workshops</h2>
                <p>Attended <strong>2-days</strong> Web development and Android workshops at <strong>SVMITM College.</strong></p>
            </div>

            <div className="participation">
                <h2>Participation</h2>
                <p>Participated in <strong>State Level </strong>Intercollege Cultural and Management Fest (2024),<strong>DR NSAM First Grade College Nitte.</strong></p>
            </div>

            <div className="reference">
                <h2>References</h2>
                <ul>
                    <li>Mr. K Praveen Kumar<br />
                        Lecturer, HOD, Dept. of Computer Science, St. Mary's College<br />
                        7975320201<br />
                        kapubellman.praveenkumar@gmail.com</li>
                    <li>Dr. Herald Ivan Monis<br />
                        Principal, St. Mary's College<br />
                        9844153860<br />
                        heraldmonis@gmail.com</li>
                </ul>
            </div>

            <div className="contact-info">
                <h2>Contacts and Links</h2>
                <ul>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/aneesh-bhat">Aneesh Bhat</a></li>
                    <li>GitHub: <a href="https://github.com/Aneesh2078">Aneesh2078</a></li>
                </ul>
            </div>
        </>
    );
}

export default Profile;
