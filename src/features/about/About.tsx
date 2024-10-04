import Header from '../structure/Header';

function About() {
   return (
      <div id="about" className="mt-24">
         <Header text="About" />
         <div className="text-primary text-lg roboto-light p-3">
            I started my tech journey by leading a small company's IT initiatives. A
            fateful project, sparked by a simple thought—'This software is bad... I bet I
            could do better'—led me to the wonderful world of software development. Today,
            I’m a full-stack engineer. What I love about this craft is the process of
            sculpting and refining a web of intricate complexities into a product that, if
            I did my job right, feels effortless and obvious to the user.
         </div>
      </div>
   );
}
export default About;
