export const queries = `#graphql
    customers: [Customer!]!
    products: [Product!]!
    sales: [Sale!]!
    validateToken(token: String!): TokenValidationResponse!
    customer(userId: String!): Customer!
    product(productId: String!): Product!
    salesLength: Int!
`;
