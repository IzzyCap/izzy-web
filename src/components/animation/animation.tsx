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
