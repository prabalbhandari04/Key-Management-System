import React from 'react'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection/InfoSection'



export const homeObjOne = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Store',
    headline: 'With the use of Cryptograpghy, secure your data ',
    description:
      'Securing credentials is more important than you think.',
    buttonLabel: 'Get Started',
    imgStart: '',
    img: require('../assets/svg-1.svg'),
    alt: 'Credit Card',
    start: ''
  };
  
  export const homeObjTwo = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Share',
    headline: 'Share crdentials to your team mates.',
    description:
      "With no hassle, now it is easier to share credentials in a safe environment.",
    buttonLabel: 'Learn More',
    imgStart: '',
    img: require('../assets/svg-2.svg'),
    alt: 'Vault',
    start: ''
  };
  
  export const homeObjThree = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'All in One',
    headline:
      'Project KMS helps  to store multiple credentials in one place',
    description:
      "Now you need only one password for all your credentials in the internet",
    buttonLabel: 'View Case Study',
    imgStart: 'start',
    img: require('../assets/profile.png'),
    alt: 'Vault',
    start: 'true'
  };
  
  export const homeObjFour = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Secure Database',
    headline: 'All your data is stored on our secure server',
    description:
      'You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.',
    buttonLabel: 'Sign Up Now',
    imgStart: 'start',
    img: require('../assets/svg-3.svg'),
    alt: 'Vault',
    start: 'true'
  };

  

function Home() {
    return (
        <div className="home_page">
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <steps />
            <InfoSection {...homeObjFour} />
        </div>
    )
}

export default Home
