import React from 'react';
import { NavBar, Input, SubmitButton, SearchForm } from 'elements';

class Header extends React.Component {
  
  render() {
    const {value, onChange, onSubmit} = this.props;
    return (
      <NavBar>
        <SearchForm onSubmit = {onSubmit}>
          <Input
            type="text"
            name="location"
            placeholder="e.g. Moscow, RU"
            value={value}
            onChange={onChange} />
          <SubmitButton type="submit" value="Submit" />
        </SearchForm>
      </NavBar>
    )
  }
};
export default Header;