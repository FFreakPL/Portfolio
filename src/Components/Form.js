import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../css/out.css";

function Form() {

    return (
        <>
            <div className="contact container" id="contact">

                {/*<div className="contact__column">*/}
                {/*    <h2 className="contact__title">Any questions?</h2>*/}
                {/*    <p className="contact__instruction">*/}
                {/*        Leave your email address or contact us!*/}
                {/*    </p>*/}
                {/*    <div className="contact__details">*/}
                {/*        <a href="mailto:info@bestshop.xyz" className="details__item">*/}
                {/*            <img src="assets/Mail%20Icon.svg" alt="mail"/>*/}
                {/*            info@bestshop.xyz*/}
                {/*        </a>*/}

                {/*        <a href="tel:123456789" className="details__item">*/}
                {/*            <img src="assets/Phone%20Icon.svg" alt="phone"/>*/}
                {/*            123 456 789*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="contact__column">*/}
                {/*    <form className="form">*/}
                {/*        <div className="form__field">*/}
                {/*            <label className="form__label" htmlFor="name">Name</label>*/}
                {/*            <input type="text" className="form__input name" id="name"/>*/}
                {/*        </div>*/}

                {/*        <div className="form__field">*/}
                {/*            <label className="form__label" htmlFor="email">E-mail</label>*/}
                {/*            <input type="email" className="form__input email" id="email"/>*/}
                {/*        </div>*/}

                {/*        <div className="form__consent">*/}
                {/*            <label className="form__checkbox">*/}
                {/*                <input type="checkbox"/>*/}
                {/*                <span className="checkbox"></span>*/}
                {/*                <p className="consent__text">*/}
                {/*                    I hereby give consent for my personal data included in my*/}
                {/*                    application to be processed for the purposes of the recruitment*/}
                {/*                    process under the European Parliament’s and Council of the*/}
                {/*                    European Union Regulation on the Protection of Natural Persons as*/}
                {/*                    of 27 April 2016, with regard to the processing of personal data*/}
                {/*                    and on the free movement of such data, and repealing Directive*/}
                {/*                    95/46/EC (Data Protection Directive)*/}
                {/*                </p>*/}
                {/*            </label>*/}
                {/*        </div>*/}
                {/*        <button type="submit" className="btn btn--primary">Send</button>*/}
                {/*    </form>*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default Form;