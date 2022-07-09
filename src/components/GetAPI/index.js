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
