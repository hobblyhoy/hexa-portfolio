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

   // Magic number 1024 matches with "lg" on tailwind
   // which I usually consider a good differentiator
   // between desktop and mobile/tablet sizes
   return { screenWidth, isDesktop: screenWidth >= 1024 };
};

export default useBreakpoint;
