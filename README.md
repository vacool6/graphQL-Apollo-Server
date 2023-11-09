# Graph QL

In this peoject we query data using GraphQL using Apollo-Server library.

## GQL vs REST

#### 1. Data fetching:
`REST`: Pre-defined endpoints with fixed data structures.

`GraphQL`: Flexible queries for custom data retrieval.

#### 2. Over-fetching/under-fetching:
`REST`: Often leads to over-fetching (retrieving more data than needed) or under-fetching (requiring multiple requests).

`GraphQL`: Allows clients to request only the data they need, reducing over-fetching and under-fetching.
without versioning, as clients specify their data requirements.

#### 3. Efficiency:
`REST`: May involve multiple requests for related data.

`GraphQL`: Single request can retrieve all required data.
## Getting started

1 ) Need to have nodejs installed.

2 ) Installing dependencies: `yarn or npm install or npm i`

3 ) To run the app `yarn start or npm start`

4 ) Default port is `4000`, where you can start to query the data.

5 ) One advantage of using Graph QL over REST API is that we fetch the exact amount of data that is required, while using REST sometimes data is under fetched or over fetched.
Personally I feel Graph QL is powerful but complex to implement where as REST is relatively easy to implement.
