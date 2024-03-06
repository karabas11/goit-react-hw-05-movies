import { Link } from 'react-router-dom';
import { NotFoundPageStyled } from './NotFoundPage.Styled';

export default function NotFoundPage() {
  return (
    <NotFoundPageStyled>
      <b>
        Sorry! Error! Please use this <Link to="/">Home</Link> to navigate to
        home page
      </b>
    </NotFoundPageStyled>
  );
}
