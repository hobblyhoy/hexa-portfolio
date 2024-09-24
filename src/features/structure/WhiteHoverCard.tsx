import { ReactNode } from 'react';

interface IProps {
   children: ReactNode;
}

function WhiteHoverCard({ children }: IProps) {
   return (
      <div className="transition-colors duration-500 ease-in-out bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md">
         {children}
      </div>
   );
}

export default WhiteHoverCard;
