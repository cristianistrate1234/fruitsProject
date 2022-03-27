import buttonBarSearch from "./buttonBarSearch.css"
import React, {Component} from 'react';

class ButtonBarSearch extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <a href={"#"} className={"content-button-Search"}>{this.props.name}</a>
      </div>
    );
  }

}

export default ButtonBarSearch