import { GraphQLClient, gql } from "graphql-request";

const urlFav = process.env.ENDPOINT;

//export a default function for API route to work
export default async function favourites(req, res) {
    const graphQLClientFav = new GraphQLClient((urlFav), {
        headers: {
            authorization: process.env.CMS_TOKEN,
        },
    });

    const favQuery = gql`
        mutation CreateFavourite( $favTitle: String!, $slug: String!) {
            createFavourite(data: {favTitle: $favTitle, product: {connect: {slug: $slug}}}) {
                id 
                favTitle
            }
        }
    `;

    const result = await graphQLClientFav.request(favQuery, {
        favTitle: req.body.favTitle,
        slug: req.body.slug,
    });
    return res.status(200).send(result);
};