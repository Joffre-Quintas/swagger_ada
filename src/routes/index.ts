import { Router } from "express";
import ProdutosController from "../controllers/ProductController";
import { validationPost, validationPut } from "../middleware/validation";

const route = Router()

route.get('/api/produtos', ProdutosController.showAll)
route.get('/api/produtos/:id', ProdutosController.findeOne)
route.delete('/api/produtos/:id', ProdutosController.deleteProduct)
route.post('/api/produtos', validationPost, ProdutosController.newProduct)
route.put('/api/produtos/:id', validationPut, ProdutosController.updateProduct)

export default route;