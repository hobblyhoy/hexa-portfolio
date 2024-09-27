import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../structure/Header';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
   return (
      <div className="mt-12 lg:mt-16" id="contact">
         <Header text="Contact" />
         <div className="flex justify-center gap-8">
            <a
               href="https://www.linkedin.com/in/nrooke42/"
               aria-label="My LinkedIn"
               target="_blank"
               rel="noreferrer"
               className="hover:text-primary-hover transition-colors duration-500"
            >
               <FontAwesomeIcon icon={faLinkedin} size="8x" />
            </a>
            <a
               href="mailto:nrooke42@gmail.com"
               aria-label="My Email"
               className="hover:text-primary-hover transition-colors duration-500"
            >
               <FontAwesomeIcon icon={faEnvelope} size="8x" />
            </a>
         </div>
      </div>
   );
}

export default Contact;
