declare module 'iconv-lite' {
	export function decode(buffer: any, encoding: any, options?: any): any;

	export function encode(content: any, encoding: any, options?: any): any;

	export function encodingExists(encoding: any): any;

	export function decodeStream(encoding: any, options?: any): any;

	export function encodeStream(encoding: any, options?: any): any;
}