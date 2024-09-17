/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface HeaderProps {
   text: string;
}

const barCss = css`
   &:before,
   &:after {
      content: '';
      position: absolute;
      top: 50%;
      width: 10vw;
      height: 1px;
   }
   &:before {
      left: -10vw;
   }
   &:after {
      right: -10vw;
   }
`;
const Header: React.FC<HeaderProps> = ({ text }) => {
   return (
      <div className="flex items-center justify-center w-full my-5">
         <span className="relative px-4 text-3xl before:bg-primary after:bg-primary" css={barCss}>
            {text}
         </span>
      </div>
   );
};

export default Header;
