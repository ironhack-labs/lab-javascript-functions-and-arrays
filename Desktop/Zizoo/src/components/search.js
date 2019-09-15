import React, {Component} from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider, Query} from "react-apollo";
import {CHALLENGE_OFFERS} from '../queries/ChallengeOffers';
import OfferItem from "./offer-item";
import {Link} from "react-router-dom";
import {MDBIcon} from "mdbreact";
import {ComConstance} from "../Common_Constants";
import {apolloClient} from "../apolloClientConfig";
import {environment} from "../environment";
import '../styles/search.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

/**
 * Get values from apolloClientConfig
 * @type {DefaultClient<graphql>}
 */
const client = new ApolloClient(apolloClient);


/**
 * Class search
 */
class Search extends Component {

    state = {
        challengeOffers: [],
        serverError: false
    };

    componentDidMount() {
        this.getData();
    }

    /**
     * Fetch ata
     * @return {Promise<ApolloQueryResult<any>>}
     */
    async getData() {
        let response = await client.query({query: CHALLENGE_OFFERS});

        if (response.data)
            this.setState({
                challengeOffers: this.filterOffers(response.data.listZizooChallengeOffers.items)
            });

        if (response.errors) {
            console.log('server error', this.state);
            this.setState({
                serverError: true
            });
        }

    }

    /**
     * Validate the offers to fit the criteria
     * all boats between 10m and 20m in length with newer than 2010
     * @param challengeOffers
     * @return {[]}
     */
    filterOffers(challengeOffers) {
        let res = [];
        if (challengeOffers.length > 0) {
            res = challengeOffers.filter((offer) => (offer.length >= 10 || offer.length <= 20) && offer.year >= 2010)
        }
        return res;
    }


    render() {
        if (!this.state.serverError) {
            return (
            <div>
                <header>
                    <div className={"container-fluid"}>
                        <div id={'header-content'} className={"row"}>
                            <div className={"col-4 "}>
                                <a href={environment.zizooWebLink}
                                   target={'_blank'}><h2><img className={'logo'} src={ComConstance.zizo.logo}
                                                              alt={'logo'}/>
                                </h2></a>
                                <p id={'slogan'}> {ComConstance.zizo.slogan}</p>
                            </div>
                            <div className={"col-4"}>
                                <h1 id={'slogan'}> {ComConstance.headerTitle} </h1>
                            </div>
                            <div id={'about-us'}>
                                <a href={environment.zizooWebLink} target={'_blank'}>{ComConstance.zizo.about}
                                    <i className="fab fa-angellist"> </i></a>
                                {ComConstance.zizo.phone} <i className="fas fa-phone"> </i>
                                <a href={environment.zizooFBLink} target={'_blank'}> <MDBIcon fab
                                                                                              icon="facebook-f"/></a>
                            </div>
                            <hr id={'header-hr'}/>
                            <Link to={'/'}><i className={'fa fa-home white-text'}> </i></Link> <i
                            className={'white-text'}> &nbsp; / Search</i>
                        </div>
                    </div>
                </header>
                <ApolloProvider client={client}>
                    <div>
                        <Query query={CHALLENGE_OFFERS}>
                            {({loading}) => {
                                if (loading) return `${ComConstance.searchPage.loading}...`;
                                return this.state.challengeOffers.map(boat =>
                                    <OfferItem key={boat.id} offerItem={boat}/>
                                )
                            }}
                        </Query>
                    </div>
                </ApolloProvider>
            </div>
        );
        } else {
            return (<p>server error</p>)
            // TODO handle error case
        }
    }
}

export default Search;
