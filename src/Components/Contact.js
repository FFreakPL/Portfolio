import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Form from './Form'
// import "../css/out.css";

function Contact() {

    return (
        <>
            <Header />
            <div className="contact">
                {/*<p>Email: ffreak.pl@gmail.com</p>*/}
                {/*<p>Tel.: +48 796 58 24 25</p>*/}
                <Form/>
            </div>
            <Footer/>
        </>
    )
}

export default Contact;