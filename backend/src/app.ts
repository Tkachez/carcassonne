import express from 'express';
import test from './routes/test'
import type { Express } from "express";

const app: Express = express();

app.use(express.json());

//Routes
app.use('/api/', test);

export default app;