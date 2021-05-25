import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * Query Params => filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa&
 * Body Params => { Objetos dentro das requisições }
 */



// No HTTP, uma nova conexão é aberta toda vez que o client solicita algo
// quando o client recebe a resposta, a conexão é fechada,
// então o servidor não consegue enviar mais nada, conhecer o cliente, etc
// é 1 requisição -> 1 resposta, direcional

// PROTOCOLO WS / WebSocket
// Quando o cliente se conecta o servidor, a conexão só se perde depois que o cliente se desconecta
// Conexão bidirecional