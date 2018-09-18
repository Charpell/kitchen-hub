### Query
- mutation {
  addRecipe(name: "Grilled Cheese Sandwich", category: "Sandwiches", description: "A tasty sandwich", instructions: "Grill it!") {
    name
    category
    description
    instructions
  }
}


- mutation {
  signupUser(username: "John", email: "john@gmail.com", password: "John") {
    token
  }
}

- mutation($username: String!, $email: String!, $password: String!) {
  signupUser(username: $username, email: $email, password: $password) {
    token
  }
}


- mutation($username: String!, $password: String!) {
  signinUser(username: $username, password: $password) {
    token
  }
}

{
  "username": "charpell",
  "password": "derico"
}