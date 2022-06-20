import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from 'express';
import { getRouter } from "./routes";

createConnection().then(async connection => {

    const app = express();
    app.use(express.json());
    app.use('/api', getRouter());


    app.listen(3000, () => console.log('Application is listening on port 3000..'));

}).catch(error => console.log(error));