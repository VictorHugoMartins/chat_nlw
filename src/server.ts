import { http } from './http';
import './websocket/client';

const port = 3333;

http.listen(port, () => console.log("Server running on port 3333"));

// quando tem ... na frente do nome do modulo importado, é porque tem que instalar as tipagens dela
// yarn add @types/express -D
// yarn add typescript -D
// yarn tsc --init
// coloca strict como false no tsconfig.json

// yarn add ts-node-dev

/**
 * 
 * GET - Buscar
 * POST - Criar
 * PUT - Alterar
 * DELETE - Deletar
 * PATCH - Alterar dado específico
 * 
 */