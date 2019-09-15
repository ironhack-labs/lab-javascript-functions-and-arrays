import ggl from "graphql-tag";

export const CHALLENGE_OFFERS = ggl`
    {
        listZizooChallengeOffers{
            items{
                id,
                year,
                name,
                length,
                image_url,
                views_24,
                price,
                country,
                cabins,
                free_extras,
                review_count,
                guests,
                locality,
                review_score,
                sail_type,
                skipper,
                type,
                tags,
                id,
                marina,
                model 
            }
        }
    }
`;


