import client from "./client";

const getMagazines = () => {
  return client.get("/magazines/");
};

export const getMagazineById = (id) => {
  return client.get(`/magazines/${id}`);
};

export const addMagazine = (magazine) => {
  return client.post("/magazines/", magazine);
};

export const deleteMagazine = (id) => {
  return client.delete(`/magazines/${id}`);
};
export const editMagazine = (id,magazine) => {
  return client.put(`/magazines/${id}`, magazine);
};

export default getMagazines;
