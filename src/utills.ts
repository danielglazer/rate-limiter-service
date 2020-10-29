import { Request } from 'express';

export function isInvalidEnvVariables(PORT: string, requestRate: string, interval: string): boolean {

	return isNaN(filterInt(PORT))
		|| isNaN(filterInt(requestRate))
		|| isNaN(filterInt(interval));
}

export function filterInt(value: string): number {
	if (/^[-+]?(\d+|Infinity)$/.test(value)) {
		return Number(value)
	} else {
		return NaN
	}
}

export function isValidRequest(req: Request) {
	const url = req.body.url;
	return url !== undefined && isString(url);
}

function isString(value: any) {
	return typeof value === 'string' || value instanceof String;
}