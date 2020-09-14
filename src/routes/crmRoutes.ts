import * as express from "express";
import { ContactController } from "../controllers/crmController";

export class CRMRouter {
	public router = express.Router();
	public contactController: ContactController = new ContactController();

	constructor() {
		this.initRoutes();
	}

	public initRoutes() {
		this.router.get("/api", this.contactController.test);
		this.router.get("/api/contact", this.contactController.getContact);
		this.router.post("/api/contact", this.contactController.addNewContact);
		this.router.get(
			"/api/contact/:contactId",
			this.contactController.getContactWithID
		);
		this.router.put(
			"/api/contact/:contactId",
			this.contactController.updateContact
		);
		this.router.delete(
			"/api/contact/:contactId",
			this.contactController.deleteContact
		);
	}
}
