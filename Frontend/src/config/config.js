const config = {
    development: {
        BACKEND_URL: 'http://localhost:3000'
    },
    production: {
        BACKEND_URL: import.meta.env.VITE_API_URL || 'https://aichat-lza8.onrender.com'
    }
};

const environment = import.meta.env.MODE || 'development';
export default config[environment];