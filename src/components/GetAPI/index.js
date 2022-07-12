export const getAllBreedsLimited = async (limit) => {
  const catsData = await fetch(`https://api.thecatapi.com/v1/breeds?limit=${limit}`);
  const response = await catsData.json();
  return response;
};

export const getAllBreeds = async () => {
  const catsData = await fetch(`https://api.thecatapi.com/v1/breeds`);
  const response = await catsData.json();
  return response;
};

export const getLimitedImages = async (limit, breed) => {
  const catsData = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_id=${breed}`);
  const response = await catsData.json();
  return response;
};

export const getRandomImage = async () => {
  try {
    const catsData = await fetch(`https://api.thecatapi.com/v1/images/search`);
    const response = await catsData.json();
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const sendVotedImage = async (body, voteType) => {
  try {
    const votedImage = await fetch(`https://api.thecatapi.com/v1/${voteType}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'bf513bac-3dbf-4809-b46a-6a3c40e1e4ad',
      },
    });

    const json = await votedImage.json();
    console.log('Успех:', JSON.stringify(json));
    return json;
  } catch (e) {
    console.error(e);
  }
};

export const getVotedImages = async (voteType, user) => {
  try {
    const catsData = await fetch(`https://api.thecatapi.com/v1/${voteType}?sub_id=${user}`, {
      method: 'GET',
      headers: {
        'x-api-key': 'bf513bac-3dbf-4809-b46a-6a3c40e1e4ad',
      },
    });
    const response = await catsData.json();
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const deleteVotedImages = async (voteType, image) => {
  try {
    const catsData = await fetch(`https://api.thecatapi.com/v1/${voteType}/${image}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'bf513bac-3dbf-4809-b46a-6a3c40e1e4ad',
      },
    });
    const response = await catsData.json();
    console.log(JSON.stringify(response));
    return response;
  } catch (e) {
    console.error(e);
  }
};
