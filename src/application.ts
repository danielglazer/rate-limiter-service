import express from "express";
import * as bodyParser from "body-parser";
import { isInvalidEnvVariables } from "./utills";

export default class Application {

	private _port: number;
	private _requestRate: number;
	private _interval: number;
	private _counter: Map<string, number>;
	private _server: express.Application;

	private static _instance: Application;

	public get port(): number {
		return this._port;
	}
	public get requestRate(): number {
		return this._requestRate;
	}
	public get interval(): number {
		return this._interval;
	}
	public get counter(): Map<string, number> {
		return this._counter;
	}
	public get server(): express.Application {
		return this._server;
	}


	private constructor() {
		this._server = express();
		this.addMiddlewares();
		this.configEnvirometVariables();
		this._counter = new Map();
	}

	private addMiddlewares() {
		// support application/json type post data
		this._server.use(bodyParser.json());
	}

	private configEnvirometVariables() {
		const port = process.env.port ?? '3000';
		const requestRate = process.env.requestRate ?? '10';
		const interval = process.env.interval ?? '60000';
		if (isInvalidEnvVariables(port, requestRate, interval))
			throw new Error('Invalid enviroment variables!');

		this._port = parseInt(port);
		this._requestRate = parseInt(requestRate);
		this._interval = parseInt(interval);
	}

	public resetCouter() {
		Application.getInstance()._counter?.clear();
	}

	public static getInstance(): Application {
		if (!Application._instance) {
			Application._instance = new Application();
		}
		return Application._instance;
	}
}