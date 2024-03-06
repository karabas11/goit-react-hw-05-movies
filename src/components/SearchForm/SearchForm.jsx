import { HiDocumentMagnifyingGlass } from 'react-icons/hi2';
import {
  SearchFormButton,
  SearchFormInput,
  SearchFormStyled,
  SearchbarStyled,
} from './SearchForm.styled';

// eslint-disable-next-line react/prop-types
const SearchForm = ({ value, onChange, onSubmit }) => {
  return (
    <SearchbarStyled>
      <SearchFormStyled onSubmit={onSubmit}>
        <SearchFormInput
          type="text"
          placeholder="Search movie..."
          name="value"
          value={value}
          onChange={onChange}
        />
        <SearchFormButton type="submit">
          <span>
            <HiDocumentMagnifyingGlass size="40" />
          </span>
        </SearchFormButton>
      </SearchFormStyled>
    </SearchbarStyled>
  );
};

export default SearchForm;
