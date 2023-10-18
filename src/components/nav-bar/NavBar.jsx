import React, { Component } from 'react';
import './NavBar.css';
import { Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material'

import instagram from '../../Assets/instagram-logo.png';
import linkedin from '../../Assets/linkedin-logo.png';
import andresmtz from '../../Assets/andrespp.jpg';
import github from '../../Assets/github.png';

export default class NavBar extends Component {

    constructor(props){
        super(props);
    
        const maxHeight = window.innerHeight - 50;
        const scrollToTop = (Math.min(window.scrollY, maxHeight) / maxHeight);
        this.state = {scrollToTop: scrollToTop, openMenu: false};
        this.onScroll = this.onScroll.bind(this);
      }
    
      onScroll()  {
    
        const maxHeight = window.innerHeight - 50;
    
        const scrollTotop = (Math.min(window.scrollY, maxHeight) / maxHeight);
    
        this.setState({scrollToTop: scrollTotop});
      }
    
      componentDidMount() {
          document.addEventListener('scroll', this.onScroll);
      };
    
      componentWillUnmount() {
          document.removeEventListener('scroll', this.onScroll);
      }

      handleOnClick = () => {
        this.setState({openMenu: !this.state.openMenu})
      }

    render() {

        const {scrollToTop} = this.state;

        return (
        <div className='nav-bar' style={{backgroundColor: 'rgba(0, 0, 0, ' + scrollToTop+')'}}>
            <h1>Andres Martinez</h1>            
            
            <div className={'nav-bar-btns' + (this.state.openMenu ? ' opened' : '')}>
                <IconButton className="close-icon" onClick={this.handleOnClick}>
                    <Close/>
                </IconButton>
                               
                <div className='container1' >
                    <div className='left'>
                        <img src={andresmtz} className='iconDetails'></img>
                    </div>
                    <div className='right'>
                        <div className='bio'>
                            <h1>Andres Martinez</h1>
                            <div className='left'><h2><b>WHO AM I</b></h2></div> <div className='right'><h2>I am a software developer based in Guadalajara, Mexico. I code in python, C++, C#, Java and more.</h2></div>
                            <div className='left'><h2><b>WHAT I DO</b></h2></div>  <div className='right'><h2>I'm currently work developing programs that use machine learning and data analytics.</h2></div>
                        </div>
                    </div>
                </div>
                <div className='container2'>
                    <div className='left'>
                        <h1>CONTACT</h1>
                        <h2>andresmtzc@gmail.com</h2>
                    </div>
                    <div className='right'>
                        <h1>SOCIALS</h1>
                        <a href="https://instagram.com/andresmtzc10?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'><img src={instagram} alt='instagram'/></a>
                        <a href="https://www.linkedin.com/in/andr%C3%A9s-mart%C3%ADnez-cabrera-562534241" target='_blank'><img src={linkedin} alt='linkedin'/></a>
                        <a href="https://github.com/Andres15mtzc" target='_blank'><img src={github} alt='github'/></a>
                    </div>
                </div>
            </div>
            <Button variant="contained" size="large" className='menu-icon' onClick={this.handleOnClick}><b>About me</b></Button>
        </div>
        )
    }
}