import { GraphQLClient } from "graphql-request";
import { headers } from "../../../next.config";

const urlFav = process.env.ENDPOINT;

//export a default function for API route to work
export default async function favourites(req, res) {
    const graphQLClientFav = new GraphQLClient((urlFav), {
        headers: {
            authorization: process.env.CMS_TOKEN,
        },
    });

    const favQuery = gql`
    mutation CreateFavourite($favTitle: String!, $favImage: Asset!, $slug: String! ) {
        createFavourite(data: {favTitle: $favTitle, favImage: $favTitle, product: {connect: {slug: $slug}}}) {
            id 
            favTitle 
            favImage
        }
    }
    `;

    const result = await graphQLClientFav.request(favQuery, {
        favTitle: req.body.favTitle,
        favImage: req.body.favImage,
        slug: req.body.slug,
    });
    return res.status(200).send(result);
};