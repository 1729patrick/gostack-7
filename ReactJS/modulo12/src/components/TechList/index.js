import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTech } from "../../store/modules/techs/actions";

export default function TechList() {
  const dispatch = useDispatch();

  const techs = useSelector(state => state.techs);
  const [newTech, setNewTech] = useState("");

  function handleAddTech() {
    dispatch(addTech(newTech));
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
