import React, { Component } from 'react';
import './NavBar.css';
import { Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material'

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
            <h1>Portfolio</h1>
            <div className={'nav-bar-btns' + (this.state.openMenu ? ' opened' : '')}>
                <IconButton className="close-icon" onClick={this.handleOnClick}>
                    <Close/>
                </IconButton>
                <img src='https://dthezntil550i.cloudfront.net/sp/latest/sp2210222307207530022116305/1280_960/7c9ef945-f10b-4c00-beba-a53c8aa2a12b.png'></img>
            </div>
            <Button variant="contained" size="large" className='menu-icon' onClick={this.handleOnClick}>About me</Button>
        </div>
        )
    }
}