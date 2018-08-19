import React from 'react';
import { NavBar, Input, SubmitButton, SearchForm } from 'elements';

const Header = ({value, onChange, onSubmit}) => {
    return (
      <NavBar>
        <SearchForm onSubmit = {onSubmit}>
          <Input
            type="text"
            name="location"
            autofocus="true"
            placeholder="Enter a city name followed by the country code (optional), e.g. Moscow, RU"
            value={value}
            onChange={onChange} />
          <SubmitButton type="submit" value="Submit" />
        </SearchForm>
      </NavBar>
    )
  };
export default Header;