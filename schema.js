exports.typeDefs = `

type Recipe {
  _id: ID
  name: String!
  imageUrl: String!
  category: String!
  description: String!
  instructions: String!
  createdDate: String
  likes: Int
  username: String
}

type User {
  _id: ID
  username: String! @unique
  password: String!
  email: String!
  joinDate: String
  favorites: [Recipe]
}

`;
