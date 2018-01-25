import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import './sq-web-components-core-theme/css/sq-web-components-core-theme.min.css'
import './sq-web-components-core-theme/css/overwritten-components/components-core_Row.css'
import './sq-web-components-core-theme/css/overwritten-components/components-core_Drawer.css'
import './sq-web-components-core-theme/css/overwritten-components/components-core_Card.css'

import Navbar, {NavbarItem, NavBar, NavbarSection} from 'sq-web-components-core-react/collections/Navbar'
import Nav, {NavItem} from 'sq-web-components-core-react/collections/Nav'
import Row, {RowItem} from 'sq-web-components-core-react/collections/Row'
import List, {ListItem} from 'sq-web-components-core-react/collections/List'
import {IconMenu, IconArrowback} from 'sq-web-icons'
import Heading from "sq-web-components-core-react/elements/Heading"
import Dashboard from './Dashboard'

import 'sq-web-icons/icons.css'
import './styles.css'
import '../src/brick/assets/styles.css'

import brick from '../src/brick/routes.js'


class App extends Component {


    constructor() {
        super()
        this.state = {
            isMenuOpen: false, 
            previousScrollY: 0, 
            isNavBarHidden: false,
            isBackButtonVisible: false
        }
        window.onscroll = this.toggleNavBar
    }

    toggleMenu = () => this.setState({isMenuOpen: !this.state.isMenuOpen })
    
    toggleNavBar = () => {
        const scrollYAbs = window.scrollY - this.state.previousScrollY
        this.setState({previousScrollY: window.scrollY})
        if (window.scrollY > 10) {
            if (scrollYAbs < 0) {
                this.setState({isNavBarHidden: false})
            } else {
                this.setState({isNavBarHidden: true})
            }
        } else {
            this.setState({isNavBarHidden: false})
        }
    }

    setBackButton = (path, history=null) => {
        if (! path ) {
            this.setState( {isBackButtonVisible: false } ) 
            return
        }
        this.setState( {isBackButtonVisible: true } ) 
        this.setState( {history: history } ) 
        this.setState( {backPath: path } ) 
    }

    goBack = () => {
        this.state.history.push(this.state.backPath)
    }

    render() {
        
        const menuClass = (this.state.isMenuOpen) ? "Drawer has-backdrop is-open" : "Drawer has-backdrop"
        const navClass = (this.state.isNavBarHidden) ? {top: "-7rem", transition: "top 0.5s"} : {top: "0rem", transition: "top 0.5s"}
 
        return (
            <Router>
                <div>
                    <Navbar app fixed position="top" style={navClass}> 
                        <Nav>
                            <NavbarItem><Heading size="xlarge" className="heading-app-name">admin</Heading></NavbarItem>
                        </Nav>
                        <NavbarSection pullRight>
                            <NavbarItem onClick={this.toggleMenu} style={{fontSize: "2rem", position:"relative", top:"-1rem"}}><IconMenu/></NavbarItem>
                        </NavbarSection>
                        <Nav className="second-navbar" horizontal style={{display: (this.state.isBackButtonVisible) ? "block" : "none" }}>
                            <NavbarItem onClick={this.goBack}><IconArrowback /></NavbarItem>
                        </Nav>
                    </Navbar>
                    <div className="container" style={{marginTop: (this.state.isBackButtonVisible) ? "7.5em" : "4.5em" }}>
                        <div className={menuClass} >
                            <div className="Drawer__container">
                                <div className="Drawer__header">
                                <div className="Drawer__title">Menu</div>
                                <span className="Drawer__close" onClick={this.toggleMenu}>
                                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>
                                </span>
                                </div>
                                <div className="Drawer__content">
                                    
                                </div>
                            </div>
                        </div>
                        <Switch>
                            <Route exact path="/" component={ Dashboard } />
                            {brick.routes.map((route, index) => <Route key={ index } exact path={ route.path }  render={ (props) => { props.setBackButton = this.setBackButton; return React.createElement(route.component, props); } } /> )}
                        </Switch>
                    </div>
                </div> 
            </Router>
        )
  }
}

export default App



