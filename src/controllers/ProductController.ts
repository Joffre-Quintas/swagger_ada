import { Request, Response } from 'express';
import { Db } from '../db/db';

class ProdutosController {
  static showAll = async(req: Request,res: Response) => {
    try {
      const response = await Db.find('tabelaProdutos')
      res.status(200).json({ data: response })
      
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor', error})
    }
  }

  static findeOne = async(req: Request,res: Response) => {
    try {
      const produto = await Db.findById(+req.params.id, 'tabelaProdutos');
      if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
      }
      res.status(200).json(produto);
      
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor', error})
    }
  }

  static deleteProduct = async(req: Request,res: Response) => {
    try {
      const produto = await Db.findById(+req.params.id, 'tabelaProdutos');
      if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
      }
      res.status(204).json({ mensagem:'O produto foi excluído com sucesso'});
      
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor', error})
    }
  }

  static newProduct= async (req: Request,res: Response) => {
    try {
      const data = req.body;
      await Db.create(data, 'tabelaProdutos')
      res.status(201).json({ mensagem: "Produto criado com sucesso!"})
    } catch (error) {
      res.status(500).json({message: 'Erro no servidor', error})
    }
  }
  static updateProduct = async(req: Request,res: Response) => {
    try {
      const produto = await Db.update(+req.params.id, req.body, 'tabelaProdutos');
      if (!produto) {
        res.status(404).json({ message: 'Produto não encontrado' });
        return;
      }
      res.status(200).json({ message: 'Produto atualizado' });
    }
    catch(error){
      res.status(500).json({message: 'Erro no servidor', error})
    }
  }
}

export default ProdutosController;