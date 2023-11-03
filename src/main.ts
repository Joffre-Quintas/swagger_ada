import express from "express"
import cors from "cors"
import "dotenv/config"
import { Db } from "./db/db"
import route from "./routes"
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from './swagger.json';


const { API_PORT, API_HOST } = process.env

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
app.use(route)

Db.create({ name: "teste", price: 199 }, "tabelaProdutos").then(res => console.log(res))

app.listen(API_PORT, () => {
    console.log(`Server started ${API_HOST}:${API_PORT}`)
})


