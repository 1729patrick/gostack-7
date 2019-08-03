import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TechList() {
  const dispatch = useDispatch();

  const techs = useSelector(state => state.techs);
  const [newTech, setNewTech] = useState("");

  function handleAddTech() {
    dispatch({ type: "ADD_TECH", payload: { tech: newTech } });
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
