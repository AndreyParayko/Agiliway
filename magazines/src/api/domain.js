import client from './client';

// export const getMagazines = () => client.get('/magazines/');
export const getMagazines = () => client.get('/magazines/').then((response) => response.data).catch((error) => { throw error; });

// export const getMagazineById = (id) => client.get(`/magazines/${id}`);
export const getMagazineById = (id) => client.get(`/magazines/${id}`).then((response) => response.data).catch((error) => { throw error; });

// export const addMagazine = (magazine) => client.post('/magazines/', magazine);
export const addMagazine = (magazine) => client.post('/magazines/', magazine).catch((error) => { throw error; });

// export const deleteMagazine = (id) => client.delete(`/magazines/${id}`);
export const deleteMagazine = (id) => client.delete(`/magazines/${id}`).catch((error) => { throw error; });

// export const editMagazine = (id, magazine) => client.put(`/magazines/${id}`, magazine);
export const editMagazine = (id, magazine) => client.put(`/magazines/${id}`, magazine).catch((error) => { throw error; });
