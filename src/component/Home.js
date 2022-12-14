import React from 'react';

import pic2 from '../Assets/cropped.png';
import pic3 from '../Assets/last.png';
import pic4 from '../Assets/last1.png';
import pic5 from '../Assets/last2.png';
import pic6 from '../Assets/last3.png';
import pic9 from '../Assets/last6.png';
import { FaCalendarAlt } from 'react-icons/fa';
import { FiPlayCircle } from 'react-icons/fi';


import topimage from "../component/images/hero-image.png";

import Form from "react-bootstrap/Form";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../component/images/image1.png';
import img2 from '../component/images/img2.png';
import img3 from '../component/images/img3.png';

import './Home.css';
import Footer from './Footer';





const Home = () => {
  return (
    
      <div className='main-wrapper'> 

      {/* first section      */}
        <div className="tables-num">
        <div className="top-text">
          <h1>Your own personal teacher, Live classes</h1>
          <div className="container">
            <div className="box shadow1">
              <h1>Book your FREE class</h1>
              <div className="radio-t">
                <h6>For Kids</h6>
                <Form.Check type="switch" id="custom-switch" />
                <h6>For Adults (18+)</h6>
              </div>

              <div>
                <p> <b>Select your child's grade/class in school</b>
                </p>
                <div className="top-table">
                  <div> class <br /> 1</div>
                  <div>  class <br /> 2</div>
                  <div> class <br /> 3</div>
                  <div> class <br /> 4</div>
                  <div> class <br /> 5</div>
                  <div> class <br /> 6</div>
                  <div> class <br /> 7</div>
                  <div> class <br /> 8</div>
                  <div> class <br /> 9</div>
                  <div> class <br /> 10</div>
                  <div> class <br /> 11</div>
                  <div> class <br /> 12</div>
                </div>
                <div className="box-button">
                   
                  <h6>  <FaCalendarAlt/> Schedule free class</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="image-top" src={topimage} alt="" />
        </div>
      </div>

      {/* second section */}
        <section >
                   
                    <div className='divisor'>
                        <div></div>
                        <div>
                        <img src={pic6} alt="Image Container" className='last3-img' />
                        </div>
                        <div className='the'><h1>WhiteHat Jr is more than just coding, math and music!</h1>
                        <p>Our proprietary, activity-based curriculum with live, real-time instruction generates: Problem Solving. Creative Thinking. Grit. Confidence. Communication.</p>
                        <h3>???? ???? And it's a lot of fun, too!</h3>
                        {/* <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn '> Schedule A Free Trial</button></a> */}
                        <div className="box-button">
                         
                  <h6>  <FaCalendarAlt/> Schedule free class</h6>
                </div>
                        </div>
                        <div></div>
                    </div>

        </section>
        {/* Third section */}
        <section className='twentytwo'>
            <h1>OUR COURSES</h1>
            <br />
                <div className='tens'>
                    <div></div>
                    <div className='tenss'>
                        <div><img src="https://s3-cdnwhjr.whjr.online/website/desktop/card1-user.png" className="card-img-top" alt="image" /></div>
                        <div>
                        <h5 className="card-title">Learn Coding</h5>

                        <p className="card-text">FOR Grade 1-12</p>
                        <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Book a Free Coding Class</b></button></a>

                        </div>
                    </div>
                    <div  className='tenss'>
                    <div>
                    <img src="https://s3-cdnwhjr.whjr.online/website/desktop/card2-user.png" className="card-img-top" alt="image" />
                    </div>
                        <div>
                        <h5 className="card-title">Learn Math</h5>

                        <p className="card-text">FOR Grade 1-8</p>
                    <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Book a Free Math Class</b></button></a>

                        </div>
                    </div>
                    <div  className='tenss'>
                    <div>
                    <img src="https://s3-cdnwhjr.whjr.online/website/mobile/home-page/card3-user.png" className="card-img-top" alt="image" />
                    </div>
                        <div>
                        <h5 className="card-title">Learn Music</h5>

                    <p className="card-text">FOR Grade 1-12</p>
                    <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Book a Free Music Class</b></button></a>

                        </div>
                    </div>
                    <div  className='tenss'>
                    <div>
                    <img src="https://s3-cdnwhjr.whjr.online/website/mobile/home-page/music_for_adults.png" className="card-img-top" alt="image" />
                    </div>
                        <div>
                        <h5 className="card-title">Music For Adults</h5>

                        <p className="card-text">FOR 18+</p>
                        <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Book a Free Music Class</b></button></a>

                        </div>
                    </div>
                    <div  className='tenss'>
                    <div>
                    <img src="https://s3-cdnwhjr.whjr.online/website/art_landing/desktop/art-course.png" className="card-img-top" alt="image" />  
                    </div>
                        <div>
                        <h5 className="card-title">Learn Art, Animation & Video</h5>

                    <p className="card-text">For Grade 3-7</p>
                    <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Book a Free Art,Animation</b> </button></a>

                        </div>
                    </div>
                    <div></div>
                </div>

            </section>
        
       
        
            
                            <section className='abc'>
            <div className='hii'>
            <button className="sam"><FaCalendarAlt /> Book a FREE Trial</button>
            <button className='rrr'>Learn More</button>

            </div>
        </section>


        
        <section className='five'>
            <h1> <b>
            Join 1 million+ students worldwide, <br />
            certified by WhiteHat Jr</b></h1>
            
            <a href="https://code.whitehatjr.com/coding/minecraft/trial/register?utm_medium=website&utm_source=website&utm_content=website"><button type="button" className="btn btn-secondary btn-lg">Book A Free Trail</button></a>
        </section>
       

        
            
        

        <section className='seven'>
        <h2>Why Coding for Kids?</h2>
        
            <div className="idiot">


            <div></div>
            <div>
            <img src={pic2} alt="Image Container" className='cropped' />
              </div>
            <div className='lefts'>
               <div>
               <h4>Your kids can learn logic, structure, sequence and creative expression</h4>
            
            <h5 className='gg'>George Land & Beth Jarman's landmark NASA study identified that kids
                    peak in creativity at age 6, followed by a gradual decline as they
                grow up.
                    <br />
                The real promise of coding is not that kids will become computer engineers.
                Coding is a fun tool for kids to exercise their desire to build,
                    curiosity to question, imagination to explore - the traits that will serve any child
                    well in nearly any career, in every hobby, and in life.</h5>
                   

               </div>

               <div >
                    <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"> 
                    <div className="box-button2">
                   
                   <div><FaCalendarAlt/>  </div> 
                   <h5 > Book a FREE Trial</h5>
                   </div>
                   </a>
                </div>
                
               
                    
            </div>
            <div></div>
            </div>
        
        </section>
       
        <section className='eight'>

            <div></div>
            <div className='mid'>
                <h1>Your Child Will Learn</h1>
                <br />
                <div className='midlogo'>
                    <div>
                    <img className='logo' src="https://t4.ftcdn.net/jpg/01/58/29/29/360_F_158292937_Z6azf0Bp9ja0nSPn96nXDINpw0RNto1J.jpg" alt="" />
                    <br />
                    <br />
                    <h4>logic</h4>
                    </div>
                    <div>
                    <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJALCfY2iv4DDdFcOe5OMC0Si2o5PsQjZHtgbHS4lr5MmsnVcv2cbYj9tq3w8LEXyOXA&usqp=CAU" alt="" />
                    <br />
                    <br />
                    <h5>Structure</h5>
                    </div>
                    <div>
                    <img className='logo' src="https://png.pngtree.com/png-clipart/20200508/ourmid/pngtree-hand-drawn-cartoon-thinking-light-bulb-gradient-illustration-png-image_2199282.jpg" alt="" />
                    <br />
                    <br />
                    <h5>Creative Thinking</h5>
                    </div>
                    <div>
                    <img className='logo' src="https://e7.pngegg.com/pngimages/359/251/png-clipart-innovation-problem-solving-design-thinking-others-purple-logo.png" alt="" />
                    <br />
                    <br />
                    <h5>sequencing</h5>
                    </div>
                    <div>
                    <img className='logo' src="https://letstalkscience.ca/sites/default/files/2020-10/decomposition_.png" alt="" />
                    <br />
                    <br />
                    <h5>Algorithm Thinking</h5>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
        <br />
        <br />
      
       {/* slidebar */}

        <div className='slider'>

        
    <Carousel fade className='editor'>
      <Carousel.Item >
        <img className="d-block w-100" src={img1} alt="First slide" />
       
      </Carousel.Item>
      <Carousel.Item  className='editor1'>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />

       
      </Carousel.Item>
    </Carousel>


        </div>






       
       
<section className='ten'>
    <div className='twos'>
        
       
    </div>
                <div className='ones'>
                     <div className='nischal'>
                     <h2 className='uu'>
                    
                    Saira???s video, Age 9, <br />
                    WhiteHat Jr Coder</h2>
                            <br />
                        
                          
                        <p>Watch how coding with WhiteHat Jr helped Saira get better at Math.</p>
                        <br />
                     </div>
                    <div >
                    <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"> 
                    <div className="box-button2">
                   
                   <div><FaCalendarAlt/>  </div> 
                   <h5 > Book a FREE Trial</h5>
                </div>
                    
                    
                    </a>
                    </div>
                  
                   


            </div>
</section>
<br />
<br />
<h1>5.5 Million Student Projects & Counting</h1>
<section className='eleven'>

<div className='part'>
<div>
<img className='fit' src="https://s3-cdnwhjr.whjr.online/website/desktop/projects/pet-1x.png" alt="" />
    </div>
    <div>
        <h3>Advanced</h3>
        <br />

<h1>Pat a Pet App</h1>
<p>The app connects fellow pet lovers to take care of each other's pets.</p>

<h3>shubham raj</h3>

    </div>
</div>
<div className='part'>
<div>
    <img className='fit' src="https://s3-cdnwhjr.whjr.online/website/desktop/projects/escape-1x.png" alt="" />
</div>
<div>
<h3>Professional</h3>
        <br />

<h1>The Escape Game</h1>
<p>An engaging strategy and survival game which is based on a dramatic army engagement in India..</p>

<h3>shubham raj</h3>
</div>

</div>
<div className='part'>
    <div>
        <img className='fit' src="https://s3-cdnwhjr.whjr.online/website/desktop/projects/ambulance-1x.png" alt="" />
    </div>
    <div>
    <h3>Begineer</h3>
        <br />

<h1>Ambulance Whizz</h1>
<p>An engaging strategy and survival game which is based on a dramatic army engagement in India.</p>

<h3>Aaran ghost</h3>
    </div>

</div>
<div className='part'>
<div>
    <img className='fit' src="https://s3-cdnwhjr.whjr.online/website/desktop/projects/school-chatt-app-1x.png" alt="" />
</div>
<div>
<h3>Intermediate</h3>
        <br />

<h1>DYSXA App</h1>
<p>The app helps children to learn letters, numbers and colors with a guided and engaging flow.</p>

<h3>kandy singh</h3>
</div>
</div>
</section>



<section className='twelve'>
    <div> <p>Want to learn how to create such awesome projects?</p> </div>
    <div> <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"> <div className="box-button1">
                   
                   <div><FaCalendarAlt/>  </div> 
                   <h5 > Book a FREE Trial</h5>
                </div></a>
 </div>
</section>
<br />



{/* section 13 */}

<section className='aav'>

        <h2>Our Expert Coding Educators</h2>
        

        <div className='aav1'>
         <div></div>
         <div className='aav2'>
         <img src={pic9} alt="Image Container" className='aav5' />


         </div>
         <div className='aav3'>
             <div>
                   <h3>
                   Top 1% teachers selected by an industry-leading 4-step teacher assessment process by top 1% of early childhood coding experts.
                   </h3>
                   <br />
                    <p><b>WhiteHat Jr follows a rigorous 4-Step Selection Process for confirming teacher candidates so your children are taught by the Top Early Childhood Coding Experts.</b></p>
             </div>
             <div className='aav12'>
             <div className="box-button">
                   
                   <div className='aav55'><FiPlayCircle />  </div> 
                   <h5 > Book a FREE Trial</h5>
                </div>
                <div className="box-button">
                   
                   <div className='aav55'><FaCalendarAlt/>  </div> 
                   <h5 > Book a FREE Trial</h5>
                  
                  
                </div>
               

                
             </div>


             <div>
                <h6> <b>4.7+ out of 5</b> stars from 8.6k+ reviews by our students</h6>
                </div>



         </div>
         <div></div>



        </div>
   

</section>


{/* section15 */}


<section className="fifteen">
 <div className='opp'>
 <button type="button" className="btn btn-secondary btn-lg"> <h6> Private Batch</h6> </button>
 
<button type="button" className="btn btn-secondary btn-lg">Solo Class </button>
 </div>



<div className='opp'>
  <button type="button" className="btn btn-secondary btn-lg"> <h6>Coding Curriculum</h6></button>
  </div>

<div className='opp'>
  
<button type="button" className="btn btn-secondary btn-lg">Begineer</button>
<button type="button" className="btn btn-secondary btn-lg">Intermediate</button>
<button type="button" className="btn btn-secondary btn-lg">Advanced</button>
<button type="button" className="btn btn-secondary btn-lg">Professional</button>
</div>


<div className='distribute'>



<div className='start'></div>


<div className='second'>
  <div className='okk'>
  <h4>Introduction to Coding</h4>  
<p>8 classes</p>
  </div>

  <div>
  <h4>Curriculum Includes</h4> <br />
<p>Sequence, Fundamentals Coding Blocks, Loops</p> <br />
<p>View Detailed curriculum</p>
 
  </div>

  <div className='duffer'>
     
   <h3>??? 9,599</h3>
  <a href="https://code.whitehatjr.com/checkout/68c41f60-bf9f-4ea2-958f-a52454d5c124"><button type="button" className="btn btn-secondary btn-lg">Buy Now</button></a>
  </div>
  




</div>
<div className='second'>

<div className='okk'>

<h4>App Developer Certificate</h4>  <br />
<p>48 classes</p>
</div>
<div>
<h4>Curriculum Includes</h4> 
<p>Introduction to Coding</p> 
<p>Events / UI,Conditionals, Complex Loop,
    <br /> Logic Structures, Turtle Coding</p>

<br /> 
<p>view detailed curriculum</p>


</div>
<div className='duffer'>
<h3>??? 49,999</h3>
<a href="https://code.whitehatjr.com/checkout/68c41f60-bf9f-4ea2-958f-a52454d5c124"><button type="button" className="btn btn-secondary btn-lg">Buy Now</button></a>
</div>





</div>
<div className='second'>
 <div className='okk'>
      
<h4>Artificial Intelligence & Code a Satellite</h4>  <br />
<p>144 classes</p>

 </div>
 <div>
 <h4>Curriculum Includes</h4> 
<p>Introduction to Coding
App Developer Certificate</p>
<p>Extended UI/UX, Rich GUI app, Space Tech simulation Arrays, Databases, APIs, Code satellite sensors.</p> <br />
<p>View Detailed curriculum</p>
<br /> 
 
 </div>
 <div className='duffer'>

 <h3>??? 135,999</h3>
 <a href="https://code.whitehatjr.com/checkout/68c41f60-bf9f-4ea2-958f-a52454d5c124"><button type="button" className="btn btn-secondary btn-lg">Buy Now</button></a>

 </div>







</div>

<div className='start'></div>

</div>






</section>

<section className='forteen'>
   <div>
   <h5> <b>World???s first of its kind learning pedagogy</b> </h5>
  
   <h1>Private Batch vs Solo Class</h1>
   </div>
   <div>
   <img src={pic3} alt="Image Container" className='last' />

   </div>
</section>
<br />




<section className='sixteen'>
<a href="https://code.whitehatjr.com/coding/minecraft/trial/register?utm_medium=website&utm_source=website&utm_content=website"><button type="button" className="btn btn-secondary btn-lg">Book A Free Trail</button></a>
</section>




<section className='eighteen'>
    <h1><b>Meet our IIT and IB-trained Curriculum Creators</b></h1>
    <div className='jkl'>
        <div></div>
        <div><img className='lkj' src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/farida.png" alt="" />
        <h6>Dr. Farida Khan</h6> <br />
        <p>PHD IITB, Gold Medalist</p>
        </div>
        <div> <img className='lkj' src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/rajeev.png" alt="" />
        <h6>Rajeev Jha</h6> <br />
        <p>Advanced Game Designer, TFI Fellow.</p>
        </div>
        <div> <img className='lkj' src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/abhijit.png" alt="" />
        <h6>Abhijeet Gawande</h6> <br />
        <p>IB Educational Technologist, AI Expert</p>
        </div>
        <div> <img className='lkj' src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/gauri.png" alt="" />
        <h6>Gauri Parulkar</h6> <br />
        <p>Computer Scientist, Entrepreneur, Science Quotient</p>
        </div>
        <div></div>
        </div>
       </section>
       <br />
       <br />
       

        <section className='nineteen'>
            <h2 className='hit' > <b>Create With Math helps your child build 
              <br /> remarkable things and
                 become future  ready!</b> </h2> 
                <a href="https://www.whitehatjr.com/live-teacher-dashboard"> <button type="button" className="btn btn-secondary btn-lg">View Live Comment</button></a>
        <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"> <button type="button" className="btn btn-secondary btn-lg">Book A Free trial</button></a>
            
        </section>
        <br />
        <br />
        

        <section className="twenty">
            <h1><b>Join the WhiteHat Jr Revolution</b></h1>
            <img src={pic5} alt="Image Container" className='last2' />

            
            </section>
            <br /><br />
            <section className='twentyone'>
                <h1><b>WhiteHat Jr has been Featured In</b></h1>
                <br />
                <a href="https://www.business-standard.com/article/pti-stories/whitehat-jr-aims-to-teach-indian-school-goers-coding-119041601283_1.html"> 
                <img className='ton' src="https://pbs.twimg.com/media/EWhIIFVXsAAYwL6.png" alt="" />
                </a>
                <a href="https://techcrunch.com/2020/08/05/indias-byjus-acquires-whitehat-jr-for-300-million/">
                <img className='ton' src="https://www.vectorlogo.zone/logos/techcrunch/techcrunch-ar21.png" alt="" />
               </a>
               <a href="https://yourstory.com/2020/06/edtech-startup-whitehat-jr-kids-ai-coding-skills"> 
                <img className='ton' src="https://en-media.thebetterindia.com/uploads/2019/04/yourstory-logo-e1556169971152.png?compress=true&quality=80&w=360&dpr=2.6" alt="" />
                </a>
                <a href="https://www.cnbctv18.com/business/ed-tech-start-up-whitehat-jr-to-rope-in-2000-online-teachers-on-its-learning-platform-6136181.htm">
                <img className='ton' src="https://www.adgully.com/img/800/201907/cnbc-tv18.jpg" alt="" />
               </a>
            </section>
            <div className='endFoot'>
            <Footer/>
            </div>
            
            
    </div>



   

   
  )
}

export default Home;

