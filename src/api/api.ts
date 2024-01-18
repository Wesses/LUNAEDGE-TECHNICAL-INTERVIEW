import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1302';

export const getAllPokemons = () => {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {

      console.error('Произошла ошибка при выполнении GET-запроса:', error);
    });
};
