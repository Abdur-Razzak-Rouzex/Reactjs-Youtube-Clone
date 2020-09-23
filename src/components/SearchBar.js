import React from "react";
import Paper  from "@material-ui/core/Paper";
import TextField  from "@material-ui/core/TextField";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => this.setState({ searchTerm: event.target.value }); // set the search string in the "searchTerm" state

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="search here..." onChange={this.handleChange} />
          {/*  whatever is being typed going to the handleChange as parameter  */}
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
