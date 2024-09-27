function Welcome() {
   return (
      <div className="text-center">
         <div className="text-7xl sm:text-9xl mb-4"><h1>Welcome!</h1></div>
         <div className="text-3xl sm:text-5xl mb-4 sm:mb-8">
            <span>My name is </span>
            <span className="text-accent">Nathan Rooke</span>
         </div>
         <div className="text-xl sm:text-2xl">
            I'm a <span className="text-accent">full stack engineer</span> and I love
            building stuff
         </div>
      </div>
   );
}
export default Welcome;
