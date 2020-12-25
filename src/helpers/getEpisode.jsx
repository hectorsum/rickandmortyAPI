
export const getEpisode = async(id) => {
  const API = `https://rickandmortyapi.com/api/episode/${id}`
  const data = await fetch(API)
                    .then(res => res.json())
                    .then(res_data => res_data)
  const {air_date,characters,episode,name} = data
  // console.log(air_date,characters,episode,name);
  return {
    air_date,
    characters,
    episode,
    name
  }
}
