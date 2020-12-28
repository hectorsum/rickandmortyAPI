export const getCharacter = async(id) => {
  let API;
  let data;
  let data_array = []; 
  if(typeof(id)==='string'){
    API = `https://rickandmortyapi.com/api/character/${id}`;
    data = await fetch(API)
                    .then(res => res.json())
                    .then(res_data => res_data)
    const {name,status,species,gender,location:{name:name_location},image} = data;
    return {
      name,
      status,
      species,
      gender,
      name_location,
      image
    }
  }else{
    for(let val of Array(id)){
      val ? API = `https://rickandmortyapi.com/api/character/${val}` : API=''
      data = await fetch(API)
      .then(res => res.json())
      .then(res_data => res_data);
      data_array.push(data);
    }
  }
  let desestructure = data_array[0].map(item => {
    let {id,name,status,species,gender,location:{name:name_location},image} = item;
    return {
      id,
      name,
      status,
      species,
      gender,
      name_location,
      image
    }
  })
  return desestructure;
}