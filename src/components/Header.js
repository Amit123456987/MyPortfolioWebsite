import AmitMaurya from '../image/AmitMaurya.jpg';
import React from 'react';
import ReactTyped from 'react-typed';

export const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            {/* <img title="my-img" src={AmitMaurya} class="img-thumbnail" alt="Amit Maurya"></img> */}
            <ReactTyped 
                    showCursor={false}
                    className='AmitsIntroTyped'
                    strings={['Hello, This is Amit Maurya. I have done B. Tech. from IIIT Delhi. I am currently Associate Software Development Engineer at JungleWorks. I love making products which eases peoples lifestyle.\n Know more about me by clicking the TECH STACK and PROJECT section']}
                    typeSpeed={55}>
            </ReactTyped>   
        </div>
    </div>    
  );
}
