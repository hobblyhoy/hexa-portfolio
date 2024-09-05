import { useEffect, useState } from 'react';

const useBreakpoint = () => {
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   useEffect(() => {
      const handleResize = () => {
         setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   // Magic number 992 refers to Bootstraps typical desktop breakpoint width
   // This app doesn't use Bootstrap but... old habits...
   return { screenWidth, isDesktop: screenWidth >= 992 };
};

export default useBreakpoint;
