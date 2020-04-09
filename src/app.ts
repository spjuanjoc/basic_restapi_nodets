import express, {Request, Response, NextFunction} from 'express';
import router from './actions/router';
import {json} from 'body-parser';

// const express = require('express');// node syntax

console.log('Node JS example');

const app = express();
const port = 3000;
const errorCode = 500;

app.use(json());

//setup URL: what to do with the items:
// GET, POST, PUT, DELETE, PATCH?
// resource/noun
// list/items/1
app.use('/api/items', router);

app.use(
    //Error handling middleware function
    (error:Error,request:Request, response:Response, next:NextFunction) => {
        response.status(errorCode).json({message:error.message});
});

app.listen(port);
