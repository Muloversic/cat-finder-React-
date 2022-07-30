export const getAllBreedsLimited = async (limit) => {
  const catsData = await fetch(`https://api.thecatapi.com/v1/breeds?limit=${limit}`);
  const response = await catsData.json();
  return response;
};

export const getCatsByBreed = async (breedId, limit) => {
  try {
    const catsData = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breedId}`, {
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
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const getImageById = async (id) => {
  try {
    const image = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
    const response = await image.json();
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const deleteImageById = async (id) => {
  try {
    const image = await fetch(`https://api.thecatapi.com/v1/votes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'bf513bac-3dbf-4809-b46a-6a3c40e1e4ad',
      },
    });
    const response = await image.json();
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const getBreedByName = async (breed) => {
  try {
    const catsData = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`);
    const response = await catsData.json();
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const getImageWithManyFiltres = async (order, limit, type, breed, page) => {
  try {
    const catsData = await fetch(
      `https://api.thecatapi.com/v1/images/search?order=${order}&limit=${limit}&mime_types=${type}&breed_id=${breed}&page=${page}`,
      {
        method: 'GET',
        headers: {
          'x-api-key': 'bf513bac-3dbf-4809-b46a-6a3c40e1e4ad',
        },
      }
    );
    const response = await catsData.json();
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const postImage = async (body) => {
  try {
    const image = await fetch(`https://api.thecatapi.com/v1/images/upload`, {
      method: 'POST',
      body: body,
      headers: {
        'x-api-key': 'bf513bac-3dbf-4809-b46a-6a3c40e1e4ad',
      },
    });
    const response = await image.json();
    return response;
  } catch (e) {
    console.error(e);
  }
};
