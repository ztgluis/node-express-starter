import express, { Request, Response } from "express";
import logger from "./util/logger";
import bodyParser = require("body-parser");

class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public app: express.Application;

    config(): void {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    routes(): void {
        const router = express.Router();
        router.get("/", (req: Request, res: Response) => {
            const json: object[] = [];
            logger.debug("return empty array");
            res.json(json);
        });
        this.app.use("/", router);
    }
}

export default new App().app;
