import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetSinglePokemonQuery } from '../services/pokemonServices/pokemonSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [searchText, setSearchText] = useState('');
  const singlePokemonInfo = useGetSinglePokemonQuery(searchText.toLowerCase());

  useEffect(() => {
    singlePokemonInfo.isSuccess &&
      searchText.length !== 0 &&
      navigate(`/single/${searchText.toLowerCase()}`, {
        state: { data: singlePokemonInfo.data, keyword: searchText }
      });

    singlePokemonInfo.isError &&
      navigate(`/single/${searchText.toLowerCase()}`, {
        state: { data: [], keyword: searchText }
      });
    // eslint-disable-next-line
  }, [searchText, singlePokemonInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(name);
    singlePokemonInfo.isSuccess &&
      searchText.length !== 0 &&
      navigate(`/single/${searchText.toLowerCase()}`, {
        state: { data: singlePokemonInfo.data, keyword: searchText }
      });
  };

  return (
    <nav>
      <form className='search-box' onSubmit={handleSubmit}>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Find a Pokemon...'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input type='submit' value='Search' />
      </form>
    </nav>
  );
};

export default Navbar;
