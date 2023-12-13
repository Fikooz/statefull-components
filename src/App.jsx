import React, { useState } from "react";
import "./App.css"; // Import your CSS file

const characters = [
  {
    id: 1,
    name: "SpongeBob SquarePants",
    description:
      "A happy and energetic sea sponge who lives in a pineapple under the sea.",
    image: "spongebob.jpg", // Replace with the actual image URL
  },
  {
    id: 2,
    name: "Patrick Star",
    description: "SpongeBob's best friend, a friendly and naive starfish.",
    image: "patrick.jpg",
  },
  {
    id: 3,
    name: "Squidward Tentacles",
    description:
      "SpongeBob's grumpy and cynical neighbor who works at the Krusty Krab.",
    image: "squidward.jpg",
  },
  {
    id: 4,
    name: "Mr. Krabs",
    description:
      "The money-loving owner of the Krusty Krab and SpongeBob's boss.",
    image: "mrkrabs.jpg",
  },
  {
    id: 5,
    name: "Sandy Cheeks",
    description:
      "A karate-loving squirrel from Texas who lives underwater in a tree dome.",
    image: "sandy.jpg",
  },
];

const Dashboard = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedImage, setEditedImage] = useState("");

  const handleDelete = (id) => {
    const updatedCharacters = characters.filter(
      (character) => character.id !== id
    );
  };

  const handleEdit = (character) => {
    setSelectedCharacter(character);
    setEditedName(character.name);
    setEditedDescription(character.description);
    setEditedImage(character.image);
  };

  const handleSaveChanges = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="dashboard">
      {characters.map((character) => (
        <div key={character.id} className="character-container">
          <img
            src={character.image}
            alt={character.name}
            onClick={() => handleEdit(character)}
            className="character-portrait"
          />
          {selectedCharacter && selectedCharacter.id === character.id && (
            <div className="character-details">
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                placeholder="Enter name"
              />
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                placeholder="Enter description"
              />
              <input
                type="text"
                value={editedImage}
                onChange={(e) => setEditedImage(e.target.value)}
                placeholder="Enter image URL"
              />
              <button onClick={handleSaveChanges}>Save Changes</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
