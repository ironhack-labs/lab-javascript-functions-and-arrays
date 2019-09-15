import React, { Component } from 'react';
import Search from './search';
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBFooter, MDBRow } from 'mdbreact';
import { ComConstance } from '../Common_Constants';
import '../styles/landing.css';


class Landing extends Component {


    state = {
        displaySearch: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.displaySearch) {
            this.returnHome();
        }
    }

    componentWillUnmount() {
        this.setState({
            displaySearch: false
        });
    }


    // to disable displaySearch so it goes back to landing

    returnHome() {
        this.setState({
            displaySearch: false
        });
    }

    // to Change state of displaySearch
    displaySearch = () => {
        this.setState({
            displaySearch: true
        });
    };


    // to render single offer item

    render() {
        if (this.state.displaySearch) {
            return (<Search />);
        } else {
            return (
                <div>
                    <MDBCol className={'text-center'}>
                        <Link onClick={this.displaySearch}
                            className={'btn-floating blue-gradient start-button black-text'} to='/Search'>
                            Start Search <i className={'fas animated flip'}> </i>
                        </Link>
                    </MDBCol>
                    <footer>
                        <MDBFooter className={'font-small pt-4 mt-4 clark-footer'}>
                            <MDBContainer fluid className={'text-center text-md-left'}>
                                <MDBRow>
                                    <MDBCol md='4'>

                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                            <div className={'my-footer text-center py-3'}>
                                <MDBContainer fluid>
                                    <img src={ComConstance.zizo.logo} alt={'logo'} /><br />
                                    <a className='text'> &copy; {new Date().getFullYear()} Copyright:
                                        Sinan Taylan </a>
                                </MDBContainer>
                            </div>
                        </MDBFooter>
                    </footer>
                </div>
            );
        }
    }
}

export default Landing;