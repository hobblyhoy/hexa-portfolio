import Header from '../structure/Header';

function About() {
   return (
      <div id="about" className="mt-24">
         <Header text="About" />
         <div className="text-primary text-lg roboto-light p-3">
            I started my tech journey leading a small companies IT initiatives. A fateful
            project stemming from a simple thought- "This software is bad... I bet I could
            do better" led me to this wonderful world of software development. Today, I'm
            a full-stack engineer. What I love about this craft is the process of
            sculpting and refining the large web of intricate complexities into a product
            which, if you did your job right, appear effortless and obvious to your user.
         </div>
      </div>
   );
}
export default About;
