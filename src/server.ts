import * as bodyParser from "body-parser";
import App from "./app";
import loggerMiddleware from "./middlewares/logger";
import { CRMRouter } from "./routes/crmRoutes";
import { AdminRouter } from "./routes/adminRoutes";

const dotenv = require("dotenv");
dotenv.config();

const app = new App({
	port: 8044,
	middleWares: [
		bodyParser.json(),
		bodyParser.urlencoded({ extended: false }),
		loggerMiddleware,
	],
	mongoURL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@firstcluster.kqcqr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
	routers: [new CRMRouter(), new AdminRouter()],
});

app.listen();
