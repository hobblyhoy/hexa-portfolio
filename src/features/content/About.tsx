import Header from '../displayElements/Header';

function About() {
   return (
      <div id="about" className="mt-24">
         <Header text="About" />
         <div className="text-primary text-lg roboto-light">
            I started my tech journey leading a small companies IT initiatives. A fateful project stemming from a simple
            thought- "This software is bad... I bet I could do better" led me to this wonderful world of software
            development. Today, I'm a full-stack engineer. What I love most about this craft is how it brings together
            all the small, intricate web of complexities that get refined into a product which, if you did your job
            right, appears effortless and obvious to your user. I live for the cycles of UX optimizations, discovering
            the key business details that shape the product vision, and the "aha!" moments uncovering the ideal
            solution.
         </div>
         {/* <div className="text-primary">Primary Color</div>
         <div className="text-primary-hover">Primary Hover Color</div>
         <button className="text-primary-disabled">Disabled Button</button>
         <div className="text-accent">Accent Color</div>
         <div className="text-accent-hover">Accent Hover Color</div> */}
      </div>
   );
}
export default About;
