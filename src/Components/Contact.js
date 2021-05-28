import "./Contact.css";
import React from 'react';
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
        this.close = this.close.bind(this);
    }
    test() {
        const socialContainer = document.querySelector(".social-container");
        socialContainer.classList.toggle("visible");
    }
    close() {
        const socialContainer = document.querySelector(".social-container");
	    socialContainer.classList.remove("visible");
    }
    render() {
        return (
            <div>
                <div className="social-container">
                    <div className="social">
                        <p>Created with <i class="fa fa-heart"></i> by Manish Kumar</p>
                        <button className="close-btn" onClick = {this.close}><i class="fas fa-times"></i></button>
                        <h4>Get in touch on</h4>
                        <ul>
                            <li>
                                <a href="https://twitter.com/manish__113" target="_blank" rel="noreferrer">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/manish-kumar-7b5530191/"  target="_blank" rel="noreferrer" >
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100026768222583"  target="_blank" rel="noreferrer" >
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/manish__113/"  target="_blank" rel="noreferrer">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="floating-btn" onClick = {this.test}>
                    Get in Touch
                </button>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
            </div>
        );
    }
}
export default Contact;