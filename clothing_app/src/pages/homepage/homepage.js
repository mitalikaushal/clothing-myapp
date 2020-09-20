import React from 'react';
import ReactDom from 'react-dom';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory';


const HomePage = () => {
    return(
        <div className='homepage'>
          <Directory />
        </div>
    )
}

export default HomePage;