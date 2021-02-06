
import React from 'react';
import LottieAnimation from './Lottie';
import home from '../../animation/football.json';


const Football = () => {

    return ( 
         <div className='example'> 
           <LottieAnimation lotti={home} height={250} width={250} />
        </div>
    )
}

export default Football; 