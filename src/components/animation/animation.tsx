'use client';
import Lottie from 'lottie-react';
import DevAnimation from './dev.json';

interface LottieAnimationProps {
  animationPath: string;
}

const Animation: React.FC<LottieAnimationProps> =  ({ animationPath }) => {
  return <Lottie animationData={DevAnimation} />;
};

export default Animation;

// This is an example of server side rendering but lottie doesnt work in server side.
// import Lottie from 'lottie-react';

// interface LottieAnimationProps {
//   animationPath: string;
// }

// const fetchAnimation = (animationPath: string) => {
//   return fetch(animationPath)
//     .then((response) => response.json());
// }

// const Animation: React.FC<LottieAnimationProps> = async ({ animationPath }) => {
//   const animation = await fetchAnimation(animationPath);

//   return animation ? <Lottie animationData={animation} /> : null;
// };

// export default Animation;
