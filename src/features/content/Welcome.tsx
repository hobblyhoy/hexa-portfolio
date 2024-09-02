/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const welcomeTextCss = css`
   font-size: 150px;
   @media (max-width: 768px) {
      font-size: 80px;
   }
`;

function Welcome() {
   return (
      <div>
         <div css={welcomeTextCss}>Welcome!</div>
         <div>
            <span>My names is </span>
            <span className="text-accent">Nathan Rooke</span>
         </div>
         <div>
            <span>I'm a </span>
            <span className="text-accent">web software engineer </span>
            <span>and I love building stuff</span>
         </div>
      </div>
   );
}
export default Welcome;
