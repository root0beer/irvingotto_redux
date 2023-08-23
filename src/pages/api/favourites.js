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
        mutation CreateFavourite( $title: String!, $favourite: String!) {
            createFavourite(data: {title: $title, product: {connect: {favourite: $favourite}}}) {
                id
            }
        }
    `;

    const result = await graphQLClientFav.request(favQuery, {
        title: req.body.title,
        favourite: req.body.favourite,
    });
    return res.status(200).send(result);
};