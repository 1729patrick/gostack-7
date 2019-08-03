import React, { useState } from "react";

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState("");

  function handleAddTech() {
    setTechs([...techs, newTech]);
  }
  function handleNewTechChange(e) {
    setNewTech(e.target.value);
  }

  return (
    <div>
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <form onSubmit={handleAddTech} data-testid="tech-form">
        <label htmlFor="tech">Tech</label>
        <input type="text" id="tech" onChange={handleNewTechChange} />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
