export const API_ROOT = 'http://localhost:8362';

export const API_URLS = {
  //API URL for User
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  letterPosts: () => `${API_ROOT}/pdf/posts`,
  filteredLetterPost: (letterType) => `${API_ROOT}/pdf/filter${letterType}`,
  loadLetter: (letter_id) => `${API_ROOT}/pdf/loads/${letter_id}`,
  downloadLetter: (letter_id) => `${API_ROOT}/pdf/downloads/${letter_id}`,

};

export const LOCAL_STORAGE_TOKEN_KEY = '_STUDENT_DASHBOARD_TOKEN_KEY_';
