import { Request, Response } from "express";

export class AdminController {
	public dashboard(req: Request, res: Response) {
		res.send({ msg: "this is dashboard" });
	}
}
