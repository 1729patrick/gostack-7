import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  // static defaultProps = {
  //   tech: "oculto"
  // };

  state = {
    newTech: "",
    techs: []
  };
  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  hanldeInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      newTech: "",
      techs: [...this.state.techs, this.state.newTech]
    });
  };

  handleRemove = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleRemove(tech)}
              />
            ))}
          </ul>
          <input
            type="text"
            onChange={this.hanldeInputChange}
            value={this.state.newTech}
          />
          <button type="submit">add</button>
        </form>
      </>
    );
  }
}

export default TechList;
