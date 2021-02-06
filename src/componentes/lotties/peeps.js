import React from 'react';
import LottieAnimation from './Lottie';
import home from '../../animation/hello_peep.json';


const HelloPeep = () => {

    return ( 
         <div className='example'> 
           <LottieAnimation lotti={home} height={250} width={250} />
        </div>
    )
}

export default HelloPeep; 