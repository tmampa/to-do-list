let store = {};
const getStorageMock = {
  getItem: (key) => store[key] || null,
  setItem: (key, value) => { store[key] = value; },
  removeItem: (key) => delete store[key],
  clear: store = {},

};

export default getStorageMock;
