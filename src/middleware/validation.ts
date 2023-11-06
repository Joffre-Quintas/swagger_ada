import { Request, Response, NextFunction } from 'express';

export function validationPost(req: Request,res: Response, next: NextFunction) {
  const { nome, descricao, preco, estoque } = req.body
  const regexString = /[a-zA-Z]/

  if(!nome || !regexString.test(nome) ) {
    return res.status(406).json({ mensagem: "Formato não suportado. Informe apenas letras para o campo nome."})
  } 
  if(!descricao || !regexString.test(descricao) ) {
    return res.status(406).json({ mensagem: "Formato não suportado. Informe apenas letras para o campo descrição."})
  } 
  if(!preco || preco < 0 ) {
    return res.status(406).json({ mensagem: "Formato não suportado. O valor deve ser maior que 0."})
  } 
  if(!estoque || estoque <= 0) {
    return res.status(406).json({ mensagem: "Formato não suportado. O valor deve ser maior que 0."})
  } 
  
  next()
}
export function validationPut(req: Request,res: Response, next: NextFunction) {
  const { nome, descricao, preco, estoque } = req.body
  const regexString = /[a-zA-Z ]+/
  const regexEstoque = /^[0-9]+$/
  

  if(!nome || !regexString.test(nome) ) {
    return res.status(406).json({ mensagem: "Formato não suportado. Informe apenas letras para o campo nome."})
  } 
  if(!descricao || !regexString.test(descricao) ) {
    return res.status(406).json({ mensagem: "Formato não suportado. Informe apenas letras para o campo descrição."})
  } 
  if(!preco || preco < 0 ) {
    return res.status(406).json({ mensagem: "Formato não suportado. O valor deve ser maior que 0."})
  } 
  if(!estoque || estoque <= 0 || !regexEstoque.test(estoque)) {
    return res.status(406).json({ mensagem: "Formato não suportado. O valor deve ser um inteiro"})
  } 
  
  next()
}