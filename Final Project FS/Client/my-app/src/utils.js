import axios from 'axios'


const baseUrl = 'http://localhost:8000'
const getAll = (url) => axios.get(`${baseUrl}${url}`);

const getById = (url, id) => axios.get(`${baseUrl}${url}/${id}`);

const getByName = (url, name) => axios.get(`${baseUrl}${url}/${name}`);

const postItem = (url, obj) => axios.post(`${baseUrl}${url}`, obj);

const updateItem = (url, id, obj) => axios.put(`${baseUrl}${url}/${id}`, obj);

const deleteItem = (url, id) => axios.delete(`${baseUrl}${url}/${id}`);

const patchItem = (url,id,obj) => axios.patch(`${baseUrl}${url}/${id}`, obj)

const getByNameByPass = (url, name, pass) => axios.get(`${baseUrl}${url}/${name}/${pass}`);



export { getAll, getById, postItem, updateItem, deleteItem,patchItem, getByName,getByNameByPass };