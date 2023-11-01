import express from "express"
import cors from "cors"
import "dotenv/config"
import { Db } from "./db/db"

const { API_PORT, API_HOST } = process.env

const app = express()
app.use(cors())


Db.create({ name: "teste", price: 199 }, "tabelaProdutos").then(res => console.log(res))


app.listen(API_PORT, () => {
    console.log(`Server started ${API_HOST}:${API_PORT}`)
})


