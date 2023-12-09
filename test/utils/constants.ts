// config.js
let APP_URL;

if (process.env.DOCKER_ENV) {
    // When running in Docker
    APP_URL = `http://api:${process.env.APP_PORT}`;
} else {
    // When running locally
    APP_URL = `http://localhost:${process.env.APP_PORT}`;
}

const TESTER_EMAIL = 'john.doe@example.com';
const TESTER_PASSWORD = 'secret';
const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'secret';
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = process.env.MAIL_CLIENT_PORT;

module.exports = {
    APP_URL,
    TESTER_EMAIL,
    TESTER_PASSWORD,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    MAIL_HOST,
    MAIL_PORT
};
