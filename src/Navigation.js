import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">All Recipes</Link> | 
      <Link to="/add">Add Recipe</Link>
    </nav>
  );
}

export default Navigation;
