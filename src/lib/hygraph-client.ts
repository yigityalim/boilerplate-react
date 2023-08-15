import { gql, GraphQLClient } from 'graphql-request'

export default new GraphQLClient(import.meta.env.HYGRAPH_ENDPOINT, {
    headers: {
        ...(import.meta.env.HYGRAPH_QUERY_TOKEN && {
            Authorization: `Bearer ${import.meta.env.HYGRAPH_QUERY_TOKEN}`,
        }),
    },
})

export { gql }
