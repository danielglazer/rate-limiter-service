import { Request, Response } from "express";
import { isValidRequest } from "../utills";
import Application from "../application";

export class ReportController {
	public PostNewReport(req: Request, res: Response) {
		if (!isValidRequest(req)) {
			res.status(402);
			res.send('Input invalid!');
			return;
		}
		//handling a case where requestRate is 0 is not needed since setInterval is not possble with 0 
		const app = Application.getInstance();
		const url = req.body.url as string;

		if (app.counter.has(url)) {
			const currentCount = app.counter.get(url) as number;
			if (currentCount >= app.requestRate) {
				res.json({ allowed: false });
				return;
			}
			app.counter.set(url, currentCount + 1);
		} else {
			app.counter.set(url, 1);
		}
		res.json({ allowed: true })
	}
}