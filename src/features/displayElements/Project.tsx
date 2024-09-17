/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

export interface IProjectProps {
   title: string;
   description: string;
   image: string;
   tags: string[];
   codeLink: string;
   siteLink: string;
}

function Project({ title, description, image, tags, codeLink, siteLink }: IProjectProps) {
   console.log({ image });
   const [hovered, setHovered] = useState(false);
   useEffect(() => {
      console.log({ hovered });
   }, [hovered]);

   const imageCss = css`
      background-image: url('${image}');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
   `;

   return (
      <div
         className={`flex items-center rounded-md p-3 ${
            hovered ? 'bg-white bg-opacity-25' : ''
         }`}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
      >
         <img className="w-36 h-36" src={image} />
         <div className="roboto-light pl-3">{description}</div>
      </div>
   );
}

export default Project;
