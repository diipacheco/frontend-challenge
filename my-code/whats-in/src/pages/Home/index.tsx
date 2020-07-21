/* eslint-disable no-unused-vars */
import React, {
  useState,
  useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleLoadSearchRequest } from '../../store/modules/films/actions/searchFilms.actions';
import useDebounce from '../../hooks/useDebounce';
import { ApplicationState } from '../../store';
// import { Container } from './styles';

const Home: React.FC = () => {
  const { data, error, loading } = useSelector((state: ApplicationState) => state.films);
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState('');
  const debouncedText = useDebounce(inputText, 1500);

  useEffect(() => {
    if (debouncedText.length >= 1) {
      dispatch(handleLoadSearchRequest(debouncedText));
    }
  }, [dispatch, debouncedText]);

  return (
    <>
      <input
        type="text"
        placeholder="Search movies..."
        onChange={({ target }) => setInputText(target.value)}
      />

      <ul>
        {data?.map((film) => (
          <li key={film.imdbID}>
            <h1>
              {film.Title}
            </h1>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
