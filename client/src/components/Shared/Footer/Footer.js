import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" id = "footer">
        <div className="container">
            <div class='footer-info'>
                <img src="https://i.ibb.co/HPGjHnN/main-1-removebg-preview.png" alt="" />
                <p className="footer-text"> 
                Поштовий індекс 58002 <br />
                м. Чернівці вул. Банкова, 1 <br />
                Навчальний корпус №20.<br />
                </p>
                <span>(0372) 55-38-26</span><br />
                <a href='college@chnu.edu.ua'>college@chnu.edu.ua</a><br />
                <hr />
            </div>
            <div className="list">
                <div className="footer-title">Our Campus</div>
                <hr />
                <ul>
                    <li>Acedemic</li>
                    <li>Planning & Administration</li>
                    <li>Campus Safety</li>
                    <li>Office of the Chancellor</li>
                    <li>Facility Services</li>
                    <li>Human Resources</li>
                </ul>
            </div>
            <div className="list">
                <div className="footer-title">Campus Life</div>
                <hr />
                <ul>
                    <li>Accessibility</li>
                    <li>Financial Aid</li>
                    <li>Food Services</li>
                    <li>Housing</li>
                    <li>Information Technologies</li>
                    <li>Student Life</li>
                </ul>
            </div>
            <div className="list">
                <div className="footer-title">Academics</div>
                <hr />
                <ul>
                    <li>Canvas</li>
                    <li>Catalyst</li>
                    <li>Library</li>
                    <li>Time Schedule</li>
                    <li>Apply For Admissions</li>
                    <li>Pay My Tuition</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer