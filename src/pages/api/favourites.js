import { GraphQLClient, gql } from "graphql-request";

const url = process.env.ENDPOINT;

export default async function comments(req, res) {
    const graphQLClient = new GraphQLClient((url), {
        headers: {
            authorization: process.env.CMS_TOKEN,
        },
    });
    
    const favQuery = gql`
    mutation CreateFavourite($title: String!, $image: Upload!, $imageBlur: Upload!) {
        createFavourite(data: {title: $title, image: $image, imageBlur: $imageBlur}) {id}
    }
    `;

    const result = await graphQLClient.request(favQuery, {
        title: req.body.title,
        image: req.body.image,
        imageBlur: req.body.imageBlur,
    });
    return res.status(200).send(result);
};