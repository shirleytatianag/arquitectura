import express from "express";
import middleware from "../middlewares/index.middlewares.js";
import routes from "../routes/index.routes.js";
import pgService from "../services/pg.service.js";
import { env } from "./default.js"


export default class Server{
    
    constructor(){
        this.app = express();
        this.port = env.port;
    }

    connectionsDB(){
        new pgService();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(middleware)
    }

    routes(){
        this.app.use(routes)
    }

    runServer(){
        this.app.listen(this.port, () =>{
            console.log(`Estoy por el puerto ${this.port}`);
        })

    }

    load(){
        this.connectionsDB();
        this.middlewares();
        this.routes();
        this.runServer();
    }
}