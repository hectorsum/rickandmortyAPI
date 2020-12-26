export const getCharacter = async(id) => {
  const API = `https://rickandmortyapi.com/api/character/${id}`;
  const data = await fetch(API)
                    .then(res => res.json())
                    .then(res_data => res_data)
  console.log(data);
  const {name,status,species,gender,location:{name:name_location},image} = data;
  return {
    name,
    status,
    species,
    gender,
    name_location,
    image
  }
}