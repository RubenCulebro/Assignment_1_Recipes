import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data/recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  const removeRecipe = (recipeName) => {
    setRecipes(recipes.filter(recipe => recipe.name !== recipeName));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Recipe</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} onRemove={removeRecipe} />} />
          {/* AddRecipe route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
