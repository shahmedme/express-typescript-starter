import * as express from "express";
import { AdminController } from "../controllers/adminController";

export class AdminRouter {
	public router = express.Router();
	public adminController: AdminController = new AdminController();

	constructor() {
		this.initRoutes();
	}

	public initRoutes() {
		this.router.get("/admin", this.adminController.dashboard);
	}
}
