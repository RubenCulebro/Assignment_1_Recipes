import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';
import Navigation from './Navigation';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data/recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const removeRecipe = (recipeName) => {
    setRecipes(recipes.filter(recipe => recipe.name !== recipeName));
  };

  return (
    <Router>
      <div>
      <Navigation />
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} onRemove={removeRecipe} />} />
          <Route path="/add" element={<AddRecipe onAdd={addRecipe} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
