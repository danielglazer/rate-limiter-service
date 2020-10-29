import { Response, Request } from 'express';
import dotenv from 'dotenv';

import { ReportController } from './controllers/report';
import Application from "./application";


dotenv.config();
let app: Application;
try {
	app = Application.getInstance();
} catch (err: any) {
	console.log(err)
	process.exit()
}
const reportController = new ReportController();
setInterval(app.resetCouter, app.interval);

app.server.post('/report', function (req: Request, res: Response) {
	reportController.PostNewReport(req, res);
});

app.server.listen(app.port, () => {
	console.log('server is listening on port ' + app.port);
	console.log(`requestRate is set to: ${app.requestRate}`);
	console.log(`interval is set to: ${app.interval}`);
});
