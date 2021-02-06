import React, { Component } from 'react'
import Football from './football';
import Gccalvo from './gccalvo';
import HelloPeep from './peeps';




const RandomLottie = () => {
  const lottie = Math.floor(Math.random() * 3);
  if (lottie === 0) {
    return <HelloPeep />;
  }
  if (lottie === 1) {
    return <Football />;
  }
  return <Gccalvo />
}

export default RandomLottie; 
