/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useAppSelector } from '../../app/hooks';

const baseCss = css`
   display: flex;
   margin-left: 50%;
`;

function PrimaryContent() {
   const screenIsFilledWithHexagons = useAppSelector(store => store.hexagon.hasFilledScreen);
   return (
      // <div css={baseCss} className={screenIsFilledWithHexagons ? 'opacity-100' : 'opacity-0'}>
      <div css={baseCss} className={'opacity-100'}>
         <div className="flex flex-col justify-center w-full">
            <div className="text-white mt-16">Hey Welcome!</div>
            <div className="text-white mt-16">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis augue eu consequat vehicula.
               Suspendisse varius, mauris vitae euismod tristique, risus sem faucibus est, egestas varius enim diam in
               orci. Sed placerat varius ipsum, quis varius libero pretium faucibus. Pellentesque et enim ut sapien
               pulvinar ornare. Suspendisse pretium tortor non lectus pretium ullamcorper. Pellentesque fringilla sem
               sit amet sem auctor cursus. Fusce purus libero, sagittis aliquet diam ut, vulputate posuere ex. Sed vel
               purus id augue viverra interdum quis a nisi. Proin a dui id arcu tincidunt vehicula. Quisque non
               efficitur leo. Cras ornare tincidunt nisl, ac dictum nibh pretium eget. Aenean fringilla placerat justo,
               eget gravida est faucibus at. Morbi sodales congue justo, a sodales risus rutrum vitae. Donec viverra
               pretium maximus. Ut quis fermentum risus. Praesent lobortis, diam non vehicula pellentesque, tortor nunc
               eleifend justo, vel bibendum quam neque sed nunc. Cras cursus metus non rutrum condimentum. Aenean
               hendrerit sed tellus quis luctus. Vestibulum ornare augue felis, nec viverra sapien vulputate in. Vivamus
               nunc magna, pellentesque at enim ut, imperdiet convallis ligula. Nunc nec egestas sem. Vestibulum blandit
               magna et commodo sodales. Etiam ut nisi congue, condimentum turpis sit amet, fermentum purus. Vivamus
               nibh velit, ultricies ac finibus vel, semper sed felis. Etiam egestas porttitor quam, quis volutpat
               tellus feugiat nec. Mauris at consectetur orci. Nullam accumsan, orci non interdum vestibulum, nunc dui
               congue tortor, sed lobortis leo lectus eget purus. Mauris commodo quam sollicitudin odio feugiat, eu
               tristique sapien porttitor. Cras id libero non enim hendrerit eleifend at vel est. Aenean quis orci est.
               Curabitur pharetra id est non vulputate. Sed tincidunt velit et est cursus, eget dignissim metus ornare.
               Etiam egestas congue porttitor. Suspendisse justo massa, tristique a velit quis, convallis pretium risus.
               Sed tellus velit, molestie et commodo in, sodales sit amet augue. Nunc venenatis orci at dolor auctor
               consectetur. Donec nec quam dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
               per inceptos himenaeos. Donec ornare ligula sit amet sem posuere, ac consectetur lectus porttitor. Duis
               venenatis diam sit amet dolor blandit, non semper orci condimentum. Nullam efficitur nibh felis, rhoncus
               vulputate mi feugiat semper. Nunc interdum vestibulum faucibus. Aliquam vel pharetra lacus. Etiam nec
               metus sapien. Morbi eget aliquam leo. Nullam posuere turpis magna, sit amet pretium ex varius eget. Sed
               et ligula sit amet ipsum molestie fermentum nec ornare purus. Sed neque dolor, vestibulum auctor sem a,
               facilisis bibendum nisl. Sed pharetra lectus eu sapien porta dignissim. Duis lobortis nibh a purus
               dapibus condimentum in sit amet turpis. Etiam vehicula metus sapien, eu viverra sem facilisis vel. Proin
               sit amet massa malesuada, faucibus magna non, dignissim augue. Maecenas tempor vestibulum tempus.
               Phasellus ultricies mauris enim, vel blandit enim ornare sed.!
            </div>
         </div>
      </div>
   );
}

export default PrimaryContent;
