import {environment} from "./environment";

/**
 * ApolloConfig
 * @type {{headers: *, uri: *}}
 */
export const apolloClient = {
    uri: environment.apolloClient.uri,
    headers: environment.apolloClient.headers
};