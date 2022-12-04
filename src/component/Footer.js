

import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import footlogo from "../component/images/whitehat-jr-logo.jpg";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="mainfooter">
        <div className="foot-img">
          <img className="foot-logo" src={footlogo} alt="" />
        </div>

        <div className="foot-head">
          <div>
            <p className="ptext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates unde eius ipsa alias ut enim illum, voluptatem
              molestiae, deleniti sequi quos sunt quod corrupti ducimus dolores
              molestias, recusandae quis libero! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quos assumenda nobis iusto voluptate
              nihil inventore nulla dignissimos. Quas expedita voluptates eum
              exercitationem illo a, ea obcaecati rerum minima excepturi atque.
            </p>
            <div className="foot-icon">
              <a href="">
                <BsFacebook />
              </a>
              <a href="">
                <AiFillTwitterCircle />
              </a>
              <a href="">
                <AiFillPlayCircle />
              </a>
              <a href="">
                <TiSocialLinkedinCircular />
              </a>
            </div>
          </div>

          <div className="col1">
            <ul>
              <h6>Links</h6>
              <li>
                <a href="">Teacher login</a>
              </li>
              <li>
                <a href="">Student Login</a>
              </li>
              <li>
                <a href="">Register</a>
              </li>
              <li>
                <a href="">space explorer programmer</a>
              </li>
              <li>
                <a href="">Byjus Future School</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul>
              <h6>More</h6>
              <li>
                <a href="">terms& condition</a>
              </li>
              <li>
                <a href="">privacy policy</a>
              </li>
              <li>
                <a href="">Complaint Redressal</a>
              </li>
              <li>
                <a href="">Fulfillment Policy</a>
              </li>
              <li>
                <a href="">Apply For Teacher Role</a>
              </li>
            </ul>
          </div>
        </div>

        <h6>*
Some of the WhiteHat Jr classes are powered by Code.org which is completely free to access.</h6>

<br />
        <div className="footer-text">
          <p>
          Today, in the computer age, not all schools teach coding in early childhood resulting in a major gap in the requirements of the new world and our children's skills. WhiteHat Jr introduces and prepares your child from 6-18 years for this new coding world. They learn fundamentals of coding--logic, structure, sequence and algorithmic thinking--to generate creative outcomes like animations and apps. All classes are taught Live 1:1 Online in the comfort of your home by Top 1% selected teachers and subject matter experts.
          </p>
          <h1>Coding For Kids </h1>
          <p>
          Whether you are a student interested in the IT careers that you could explore with a coding qualification or just fascinated by the world of tech and coding courses, WhiteHat Jr offers a wide range of online coding courses that make coding accessible to kids and young teenagers. We've put together a simple guide to answer some of the most commonly asked questions from parents and prospective students to help you understand the basics of what our kids programming courses cover, whether they are right for your child and how best to navigate them.
          </p>
          <h1>Curious about what is involved in courses for coding for kids? </h1>
          <p>
          We have developed kids programming courses that allow kids, teens, and young adults to learn how to code at all ages with proper coding classes and in an environment that works for them – Online. The courses offered by WhiteHat Jr are designed to teach kids to code with core programming skills, and then improve the proficiency of the kids coding languages. Our facilitators align digital literacy into coding courses, as required by the existing skills of the learners. Since our curriculum is developed by industry experts and the most important activity of teaching coding is done by top 1% selected teachers, learners get state of the art education through our propriety, creative activity based curriculum.
          </p>
          <h1>What will you learn in a coding course for kids? </h1>
          <p>
          WhiteHat Jr's coding courses are oriented towards coding and programming. You will learn:

           The essentials of coding: Logic, Structure, Sequence
          How to create Websites, Animations & Apps
          How to manipulate data using programming languages
           How to be a problem solver
           How technologies converse with each other
          </p>
          <h1>Start to learn coding with us!</h1>
          <p>
          If you are a motivated parent and passionate about technology and where it can lead you to, then Join now. If you or your child would like to find out more about the opportunities provided by our coding programs, explore the kids programming courses offered by WhiteHat Jr and consider enrolling for a free trial. Remember, no coding experience beforehand is required.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;