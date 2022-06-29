//api client template for running https://thedogapi.com

import client from "./client";

const breedsEndpoint = "/breeds";

const getBreeds = () => client.get(breedsEndpoint);

const getBreedImage = (id: string) => {
  const endpoint = `/images/search?breed_ids=${id}&include_breeds=false`;

  return client.get(endpoint);
};

export default {
  getBreeds,
  getBreedImage
};
