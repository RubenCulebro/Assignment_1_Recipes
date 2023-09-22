import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipe({ onAdd }) {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [directions, setDirections] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
  
        const newRecipe = {
            name,
            ingredients,
            directions,
            description,
            image
        };
    
        onAdd(newRecipe);
        navigate('/');
    };
  
    return (
        <div>
            <h2>Add new recipe</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Ingredients:</label>
                <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            </div>
            <div>
                <label>Directions:</label>
                <textarea value={directions} onChange={(e) => setDirections(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Image:</label>
                <select value={image} onChange={(e) => setImage(e.target.value)} required>
                <option value="">Select an image</option>
                <option value="images/banana_pancakes.jpg">Banana Pancakes</option>
                <option value="images/grilled_cheese.jpg">Grilled Cheese</option>
                </select>
            </div>
            <div>
                <button type="submit">Add Recipe</button>
            </div>
            </form>
        </div>
    );
}

export default AddRecipe;