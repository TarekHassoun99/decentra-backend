const APP_URL = process.env.DOCKER_ENV
    ? `http://api:${process.env.APP_PORT}`
    : `http://localhost:${process.env.APP_PORT}`;

const TESTER_EMAIL = 'john.doe@example.com';
const TESTER_PASSWORD = 'secret';
const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'secret';
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = process.env.MAIL_CLIENT_PORT;

export {
    APP_URL,
    TESTER_EMAIL,
    TESTER_PASSWORD,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    MAIL_HOST,
    MAIL_PORT
};
