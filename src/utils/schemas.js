// utils/schemas.js
const yup = require('yup');
const Service = require('../services/service');

const requestUserSchema = yup.object().shape({
    username: yup.string().required("Username is required!"),
    email: yup.string().email().required("E-mail is required!"),
    password: yup.string().min(6).required("Password is required!"),
});

const requestLoginSchema = yup.object().shape({
    username: yup.string().required("Username is required!"),
    password: yup.string().min(6).required("Password is required!"),
});

Service.addSchema('requestUser', requestUserSchema);
Service.addSchema('requestLogin', requestLoginSchema);
