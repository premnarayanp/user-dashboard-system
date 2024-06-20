//export const API_ROOT = 'http://localhost:8362';
export const API_ROOT = "https://user-dashboard-systems.onrender.com";

export const API_URLS = {
  //API URL for User
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  letterPosts: () => `${API_ROOT}/letters/posts`,
  filteredLetterPost: (letterType) => `${API_ROOT}/letters/filter/${letterType}`,
  downloadLetter: (letter_id) => `${API_ROOT}/letters/downloads/${letter_id}`,
  //loadLetter: (letter_id) => `${API_ROOT}/letters/loads/${letter_id}`,

};

export const LOCAL_STORAGE_TOKEN_KEY = '_STUDENT_DASHBOARD_TOKEN_KEY_';
