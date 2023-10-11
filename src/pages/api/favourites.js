// import { GraphQLClient, gql } from "graphql-request";

// const url = process.env.ENDPOINT;

// export default async function favourites(req, res) {
//     const graphQLClient = new GraphQLClient((url), {
//         headers: {
//             authorization: process.env.CMS_TOKEN,
//         },
//     });

//     const favQuery = gql`
//     mutation CreateFavourite($title: String!, $image: String!, $imageBlur: String!, $imageId: String! ) {
//         createFavourite(data: {title: $title, image: $image, imageBlur: $imageBlur, imageId: $imageId}) {
//             id 
//             title
//             image
//             imageBlur
//             imageId
//         }
//     }
//     `;

//     const result = await graphQLClient.request(favQuery, {
//         title: req.body.title,
//         image: req.body.image,
//         imageBlur: req.body.imageBlur,
//         imageId: req.body.imageId,
//     });
//     return res.status(200).send(result);
// };