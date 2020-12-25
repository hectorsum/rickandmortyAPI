
export const getFullEpisodes = async(id) => {
  const API = `https://rickandmortyapi.com/api/episode`
  const data = await fetch(API)
                    .then(res => res.json())
                    .then(res_data => res_data)
  const {results} = data
  const fullData = results.map(item =>{
    return {
      id: item.id,
      name: item.name,
      air_date: item.air_date,
      episode: item.episode
    }
  })
  return fullData
}
