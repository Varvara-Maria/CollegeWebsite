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
                <div className="footer-title">Send us feedback</div>
                <hr />
                <form>      
                    <input name="name" type="text" class="feedback-input" placeholder="Ім'я" />   
                    <input name="email" type="text" class="feedback-input" placeholder="Пошта" />
                    <textarea name="text" class="feedback-input" placeholder="Коментар"></textarea>
                    <button className='submit'>Надіслати</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Footer