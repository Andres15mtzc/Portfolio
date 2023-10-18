import React, { Component } from 'react';
import './Resume.css';
import { Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material'

import resume from '../../Assets/resume.png';
import instagram from '../../Assets/instagram-logo.png';
import linkedin from '../../Assets/linkedin-logo.png';
import foto from '../../Assets/andrespp.jpg';
import github from '../../Assets/github.png';

/* This jsx generates the "About me" and "Resume" panels and buttons */

export default class Resume extends Component {

    constructor(props){
        super(props);
        const maxHeight = window.innerHeight - 50;
        const scrollToTop = (Math.min(window.scrollY, maxHeight) / maxHeight);
        this.state = {scrollToTop: scrollToTop, openInfo: false, openResume: false};
        this.onScroll = this.onScroll.bind(this);
        this.state = {openMenu: false};
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

      handleOnClickInfo = () => {
        this.setState({openInfo: !this.state.openInfo})
      }

      handleOnClickResume = () => {
        this.setState({openResume: !this.state.openResume})
      }

    render() {

        const {scrollToTop} = this.state;

        return (
        <div>
            /* PANEL OF "ABOUT ME" */
            <div className='info-panel' style={{backgroundColor: 'rgba(0, 0, 0, ' + scrollToTop+')'}}>
                <h1>Andres Martinez</h1>            
                
                <div className={'info-box' + (this.state.openInfo ? ' opened' : '')}>
                    <IconButton className="close-icon" onClick={this.handleOnClickInfo}>
                        <Close/>
                    </IconButton>
                                
                    <div className='container1' >
                        <div className='left'>
                            <img src={foto} className='iconDetails' alt='foto'></img>
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
                <Button variant="contained" size="large" className={'menu-icon' + (this.state.openInfo ? ' opened' : (this.state.openResume ? ' opened' : ''))} onClick={this.handleOnClickInfo}><b>About me</b></Button>
            </div>

            /* PANEL OF "RESUME" */
            <div className='resume'>
                <h1>A</h1>
                <div className={'resume-container' + (this.state.openResume ? ' opened' : '')}>
                    <IconButton className="close-icon" onClick={this.handleOnClickResume}>
                        <Close/>
                    </IconButton>
                                
                    <img src={resume} alt='resume'/>
                </div>
                <Button variant="contained" size="large" className={'resume-btn'+ (this.state.openInfo ? ' opened' : (this.state.openResume ? ' opened' : ''))} onClick={this.handleOnClickResume}><b>Resume</b></Button>
            </div>
        </div>
        )
    }
}