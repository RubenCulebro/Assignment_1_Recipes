import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data/recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <Router>
      <div>
        <nav>
          {/* Navigation links */}
        </nav>
        <Routes>
          {/* Routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
