const queryStringify = (data: Record<string, unknown>): string => {
	if (Object.keys(data).length === 0) {
		return '';
	}

	const keys = Object.keys(data);
	return keys.reduce(
		(result, key, index) =>
			`${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
		'?'
	);
};

type Options = {
	method: keyof typeof HTTPTransport.METHOD;
	data?: Record<string, any> | FormData;
	headers?: Record<string, string>;
	timeout?: number;
  file?: boolean
};

type OptionsWithNoMethod = Omit<Options, 'method'>;

type HTTPMethod = (url: string, options?: OptionsWithNoMethod) => Promise<any>;

export default class HTTPTransport {
	static API_URL = 'https://ya-praktikum.tech/api/v2';
	protected endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
	}

	public static METHOD = {
		GET: 'GET',
		POST: 'POST',
		PUT: 'PUT',
		DELETE: 'DELETE'
	} as const;

	private static Error = {
		ERR_CONNECTION_ABORTED: 'Запрос отменён',
		ERR_CONNECTION_TIMED_OUT: 'Время ожидания ответа истекло',
		ERR_CONNECTION_ERROR: 'Произошла ошибка при выполнении запроса'
	} as const;

	public get: HTTPMethod = (path = '/', options = {}) => {
		if (options.data) {
			path += queryStringify(options.data as Record<string, string>);
		}
		return this.request(this.endpoint + path, {
			...options,
			method: HTTPTransport.METHOD.GET
		});
	};

	public put: HTTPMethod = (path, options = {}) =>
		this.request(this.endpoint + path, {
			...options,
			method: HTTPTransport.METHOD.PUT
		});

	public post: HTTPMethod = (path, options = {}) =>
		this.request(this.endpoint + path, {
			...options,
			method: HTTPTransport.METHOD.POST
		});

	public delete: HTTPMethod = (path, options = {}) =>
		this.request(this.endpoint + path, {
			...options,
			method: HTTPTransport.METHOD.DELETE
		});

	public request = (url: string, options: Options): Promise<any> => {
		const { headers, data, method, timeout = 5000, file } = options;

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			xhr.open(method, url);

			xhr.withCredentials = true;
			xhr.responseType = 'json';
			xhr.timeout = timeout;

			if (headers) {
				Object.keys(headers).forEach((key) => {
					xhr.setRequestHeader(key, headers[key]);
				});
        xhr.send(data as FormData);
			} else {
				xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
			}

			if (method === HTTPTransport.METHOD.GET || !data) {
				xhr.send();
			} else {
				if (file) {
          console.log(data);
          xhr.send(data as FormData)
        } else {
          xhr.send(JSON.stringify(data));
        }
			}

			xhr.onload = () => resolve(xhr.response);

			xhr.onabort = () =>
				reject(new Error(HTTPTransport.Error.ERR_CONNECTION_ABORTED));
			xhr.ontimeout = () =>
				reject(new Error(HTTPTransport.Error.ERR_CONNECTION_TIMED_OUT));
			xhr.onerror = () =>
				reject(new Error(HTTPTransport.Error.ERR_CONNECTION_ERROR));
		});
	};
}
