import { getCharacter } from "./getCharacter";

export const getEpisode = async(id) => {
  const API = `https://rickandmortyapi.com/api/episode/${id}`
  const data = await fetch(API)
                    .then(res => res.json())
                    .then(res_data => res_data)
  const {air_date,characters,episode,name} = data
  const fullIds = characters.map(item => parseInt(item.split('/')[5]));
  return {
    air_date,
    fullIds,
    episode,
    name
  }
}
