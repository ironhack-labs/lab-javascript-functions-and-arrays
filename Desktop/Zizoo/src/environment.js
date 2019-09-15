/**
 * Define local environment constants
 * @type {{apolloClient: {headers: {"x-api-key": string, "content-type": string}, uri: string}}}
 */
export const environment = {
    apolloClient: {
        uri: "https://f3rqrapxrfgxbinryu2s3aurkq.appsync-api.eu-west-1.amazonaws.com/graphql",
        headers: {
            'x-api-key': 'da2-6gsug3rxuja75nqnom67h3x2vi',
            'content-type': 'application/graphql'
        }
    },
    zizooFBLink: 'https://www.facebook.com/pg/ZizooBoats/',
    zizooWebLink: 'https://www.zizoo.com/en/about-zizoo',
}