import React, {Component} from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBContainer,} from 'mdbreact';
import {ComConstance} from '../Common_Constants';
import '../styles/offer-item.css';


/**
 * Class search
 */
class OfferItem extends Component {

    /**
     * Component state objects
     * @type {{starRating: number, offerItem: null}}
     */
    state = {
        offerItem: null,
        starRating: 0
    };

    constructor(props) {
        super(props);
        this.state.offerItem = this.props.offerItem;
        if (this.state.offerItem.free_extras) {
            this.state.offerItem.free_extras = this.convertStringToJson(this.state.offerItem.free_extras);
        }
    }

    /**
     * handle offer items after component mounting
     */
    componentDidMount() {
        this.setState(this.state.offerItem, () => {
            return this.props.offerItem;
        });
    }

    /**
     * Convert provided string to readable string
     * @param str
     * @return {string}
     */
    convertStringToJson = (str) => {
        return str.replace(',', '000').replace(/[^\w\s]/gi, '').replace('000', ', ');
    };

    /**
     * render Single Offer item
     * @return {*}
     */
    render() {
        return (
            <MDBContainer className={'offer-items animated fadeInLeftBig slow'}>
                <MDBCard className={'w-75 mb-4'}>
                    <MDBCardBody className={'container'}>
                        <div className={'row'}>
                            <img className={'col-sm-6 float-left'} src={this.state.image_url} alt={'offer-img'}/>
                            <div className={'col-sm-6 float-right row'}>
                                <div className={'col-sm-8 font-italic'}>
                                    <strong>{this.state.type} {this.state.length}</strong> {this.state.year} <br/>
                                    <i className={'far fa-heart float-right'}> </i>
                                    {this.state.locality}, {this.state.country}
                                    <hr/>
                                    <i className={'blue-text'}>{ComConstance.boat.type}</i> {this.state.sail_type}
                                    <br/>
                                    <br/>
                                    <i className={'blue-text'}>{ComConstance.boat.freeExtras}</i> {this.state.free_extras}
                                </div>
                                <div className={'col-sm-4 font-italic'}> {ComConstance.boat.length}
                                    <i className={'fas fa-ruler blue-text'}> </i>{this.state.length}m
                                    <hr/>
                                    {ComConstance.boat.cabins} <i
                                        className={'fas fa-person-booth blue-text'}> </i> {this.state.cabins}.
                                    <hr/>
                                    {ComConstance.boat.guests} <i
                                        className={'fas fa-user-friends blue-text'}> </i> {this.state.guests}.
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <hr/>
                        <div className={'row'}>
                            <span className={'col-sm-4 float-left'}>
                                    <i className={'fa fa-eye blue-text'}>  </i> {this.state.views_24} {ComConstance.boat.last24Hours}
                            </span>
                            <span className={'col-sm-4 float-center'}>
                                    <i className={'far fa fa-star orange-text'}>{this.state.review_count}</i>
                            </span>
                            <div className={'sol-sm 4 float-right font-italic'}>
                                <span>
                                    {ComConstance.boat.stratFrom} {ComConstance.boat.currency}
                                    <strong
                                        className={'blue-text'}>{this.state.price}</strong> {ComConstance.boat.pricePercent}
                                </span>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <MDBBtn color='primary float-right col-sm-4'>
                                {ComConstance.directBooking} <i className={'fas fa-bolt white-text'}> </i>
                            </MDBBtn>
                            <MDBBtn outline color='primary col-sm-6' disabled={true}>
                                <i className={'fas fa-check'}> </i> {ComConstance.boat.sicherungsshein}  &nbsp;
                                <i className={'fas fa-check'}> </i> {ComConstance.boat.luxury} </MDBBtn>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    }
}

export default OfferItem;