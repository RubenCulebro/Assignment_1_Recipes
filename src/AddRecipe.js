import React, { useState } from 'react';

function AddRecipe({ onAdd }) {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [directions, setDirections] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    
  return (
    <div>
      {/* Form for adding a new recipe will be rendered here */}
    </div>
  );
}

export default AddRecipe;