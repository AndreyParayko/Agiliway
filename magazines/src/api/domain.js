import client from './client';

// export const getMagazines = () => client.get('/magazines/');
export const getMagazines = () => client.get('/magazines/').then((response) => response.data).catch((error) => { throw error; });

export const getMagazineById = (id) => client.get(`/magazines/${id}`);

export const addMagazine = (magazine) => client.post('/magazines/', magazine);

export const deleteMagazine = (id) => client.delete(`/magazines/${id}`);

export const editMagazine = (id, magazine) => client.put(`/magazines/${id}`, magazine);
