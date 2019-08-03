import React, { useState, useEffect } from "react";

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState("");

  useEffect(() => {
    const techs = localStorage.getItem("techs");
    if (techs) setTechs(JSON.parse(techs));
  }, []);

  useEffect(() => {
    localStorage.setItem("techs", JSON.stringify(techs));
  }, [techs]);

  function handleAddTech() {
    setTechs([...techs, newTech]);
    setNewTech("");
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
        <input
          type="text"
          id="tech"
          onChange={handleNewTechChange}
          value={newTech}
        />

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
