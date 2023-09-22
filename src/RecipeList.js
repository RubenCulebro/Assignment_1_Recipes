import React from 'react';

function RecipeList({ recipes, onRemove }) {
    if (!recipes.length) {
      return <p>No recipes found!</p>;
    }
  
    return (
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Directions:</strong> {recipe.directions}</p>
            <p><strong>Description:</strong> {recipe.description}</p>
            <button onClick={() => onRemove(recipe.name)}>Remove</button>
          </div>
        ))}
      </div>
    );
  }

export default RecipeList;