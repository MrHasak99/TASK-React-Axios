import instance from "./index";

async function getAllPets() {
  const response = await instance.get("/pets");
  return response;
}

async function getPetById(id) {
  const response = await instance.get(`/pets/${id}`);
  return response;
}

async function addPet(data) {
  const response = await instance.post("/pets", data);
  return response;
}

async function deletePet(id) {
  const response = await instance.delete(`/pets/${id}`);
  return response;
}

export { getAllPets, getPetById, addPet, deletePet };
