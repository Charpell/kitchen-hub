import React from 'react'

const initialState = {
  name: "",
  imageUrl: "",
  instructions: "",
  category: "Breakfast",
  description: "",
  username: ""
};

class AddRecipe extends React.Component {
  state = { ...initialState };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    const {
      name,
      imageUrl,
      category,
      description,
      instructions,
      username
    } = this.state;


    return (
      <div className="App">
        <h2 className="App">Add Recipe</h2>
        <form className="form">
          <input
            type="text"
            name="name"
            placeholder="Recipe Name"
            onChange={this.handleChange}
            value={name}
            />
          <select name="category" onChange={this.handleChange}
          value={category}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
    
        <input 
          type="text" 
          name="description" 
          placeholder="Add description" 
          onChange={this.handleChange} 
          value={description}
        />
    
        <textarea 
          name="instructions" 
          placeholder="Add instructions" 
          onChange={this.handleChange} 
          value={instructions}
        />
    
        <button type="submit" className="button-primary">Submit</button>
    
        </form>
    
      </div>
    )
  }
};

export default AddRecipe;