import React from 'react';
import Header from './Header'
import "../css/out.css";
import Footer from './Footer';

function About() {

    return (
        <>
            <Header />
            <div className="aboutme">
                <p className="aboutme_description">I started my journey with programming in December 2021 by joining JS/React BootCamp in
                    CodersLab school. I quickly found out that this is the thing I want to do in my life:) Not only
                    because it is very satisfying but also because it allows me to constantly improve myself and prevent
                    me from beeing bored:) I found out that programmig means learning all the time and I can surely say
                    that I like it. I am a person who never gives up:) I try to achieve perfection in everything I do
                    and when I struggle with something - I work even harder:) I'm also an ambitious person with a great
                    willingness to learn and develop. I am looking for my first commercial experience as a frontend
                    developer.</p>

                <p>* 🧠  I'm learning React and much more...</p>

                <h2>Skills</h2>>

                <p style={{margin: "0"}}>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
                    <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
                    <a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
                    <a href="https://webpack.js.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg" width="36" height="36" alt="Webpack" /></a>
                    <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>
                    <a href="https://babeljs.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored.svg" width="36" height="36" alt="Babel" /></a>
                    <a href="https://webpack.js.org/"><img src="https://user-images.githubusercontent.com/94534923/176645709-8dc82357-d422-4ac7-8614-3bb005e4b705.png" width="36" height="36" alt="Spark"/></a>
                    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" /></a>
                    <a href="https://gulpjs.com/"><img src="https://user-images.githubusercontent.com/94534923/176650830-ffa1aba0-6173-4a47-a5ba-4ce0e2bb3a72.png" width="36" height="36" alt="Gulp"/></a>
                    <a href="https://nodejs.com/"><img src="https://user-images.githubusercontent.com/94534923/176650834-c1176f5b-d5a5-4fbd-8d06-ec948ed52e57.jpg" width="36" height="36" alt="Nodejs"/></a>
                    <a href="https://npm.com/"><img src="https://user-images.githubusercontent.com/94534923/176645687-31a3a6fe-c094-4bac-bdde-9a1d8a9372a7.png" width="36" height="36" alt="Npm"/></a>
                    <a href="https://www.adobe.com/"><img src="https://user-images.githubusercontent.com/94534923/176645690-3f8830cd-4a82-4215-9173-0fa96efae77c.png" width="36" height="36" alt="Photoshop"/></a>
                    <a href="https://www.adobe.com/"><img src="https://user-images.githubusercontent.com/94534923/176645682-72299e2c-6f9c-4ae9-96cc-3ffd0cefed80.png" width="36" height="36" alt="Lightroom"/></a>
                    <a href="https://www.adobe.com/"><img src="https://user-images.githubusercontent.com/94534923/176645705-b0497d14-a8d8-476b-af20-7a11f6327d13.png" width="36" height="36" alt="Spark"/></a>
                    <a href="https://www.reasonstudios.com/"><img src="https://user-images.githubusercontent.com/94534923/176648597-0f863fd5-6411-4e50-ace3-8a1fc45e8210.jpeg" width="36" height="36" alt="Reason"/></a>
                </p>
            </div>
            <Footer/>
        </>
    )
}

export default About;