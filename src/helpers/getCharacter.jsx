export const getCharacter = async() => {
  const API = `https://rickandmortyapi.com/api/character`;
  const data = await fetch(API)
                    .then(res => res.json())
                    .then(res_data => res_data)
  const {results} = data
  const fullData = results.map(item =>{
    return {
      id: item.id,
      name: item.name,
      status: item.status,
      species: item.species,
      gender: item.gender,
      location: item.location.name,
      image: item.image
    }
  })
  return fullData
}