# Kitchen Hub
Anyone can cook!
Kitchen hub is a simple application that allows everyone share their secret cooking techniques. By learning from each other we all become better.

### Technologies
+ Node
+ Graphql
+ Express
+ MongoDB
+ React
+ Heroku

### Language
+ Javascript

### Deployment
Kitchen hub is hosted on heroku and can be accessed via this link [https://kitchen-hub.herokuapp.com/](https://kitchen-hub.herokuapp.com/)

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


### Contributions
Kitchen Hub welcomes contributions in form of pull requests, as main purpose of open sourcing is to make it better and easier to use.

Reporting Bugs
If you find bugs in the application, create a New Issue with additional data, like your node/npm version or snippet of code and let me know about it.

Contact
If you need clarification on what is not clear, contact me via mail ebuka.umeh@andela.com


### Author
Ebuka Umeh
