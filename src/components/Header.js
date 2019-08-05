import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faDog } from '@fortawesome/free-solid-svg-icons'
 
const element = <FontAwesomeIcon icon={faCode} style={{color: 'white'}}/>
const elementDog = <FontAwesomeIcon icon={faDog} style={{color: 'white'}}/>
const Header = ({titulo}) => (
    
<header>
    <h1 className="text-center">{elementDog}&nbsp;{titulo}</h1>
    <p className="text-center">{element}&nbsp;<a style={{color: 'white'}} href="https://github.com/CthompsonCL/" className="text-center">https://github.com/CthompsonCL/ &nbsp; </a></p>
</header>
);   
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header;