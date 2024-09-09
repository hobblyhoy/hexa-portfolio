/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const welcomeTextCss = css`
   font-size: 150px;

   @media (max-width: 1400px) {
      font-size: 120px;
   }

   @media (max-width: 768px) {
      font-size: 80px;
   }
`;

const myNameIsTextCss = css`
   font-size: 54px;
   margin-bottom: 30px;
   @media (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 15px;
   }
`;

const iAmATextCss = css`
   font-size: 23px;
`;

function Welcome() {
   return (
      <div>
         <div css={welcomeTextCss}>Welcome!</div>
         <div css={myNameIsTextCss}>
            <span>My name is </span>
            <span className="text-accent">Nathan Rooke</span>
         </div>
         <div css={iAmATextCss} className="mb-12">
            I'm a <span className="text-accent">web software engineer</span> and I love building stuff
         </div>
      </div>
   );
}
export default Welcome;
