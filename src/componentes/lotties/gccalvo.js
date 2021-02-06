
import React from 'react';
import LottieAnimation from './Lottie';
import home from '../../animation/gccalvo.json';


const Gccalvo = () => {

    return ( 
         <div className='example'> 
           <LottieAnimation lotti={home} height={250} width={250} />
        </div>
    )
}

export default Gccalvo; 