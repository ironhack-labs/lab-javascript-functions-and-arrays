import { environment } from "./environment";


export const apolloClient = {
    url: environment.apolloClient.url,
    headers: environment.apolloClient.headers
};