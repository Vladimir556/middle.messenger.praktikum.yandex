const queryStringify = (data: Record<string, unknown>): string => {
  if (Object.keys(data).length === 0) {
    return '';
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
};

type Options = {
  method: keyof typeof HTTPTransport.METHOD,
  data?: Record<string, unknown>,
  headers?: Record<string, string>,
  timeout?: number,
};

type OptionsWithNoMethod = Omit<Options, 'method'>;

export class HTTPTransport {
  public static METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  } as const;

  private static Error = {
    ERR_CONNECTION_ABORTED: 'Запрос отменён',
    ERR_CONNECTION_TIMED_OUT: 'Время ожидания ответа истекло',
    ERR_CONNECTION_ERROR: 'Произошла ошибка при выполнении запроса',
  } as const;

  public get(url: string, options: OptionsWithNoMethod = {}) {
    if (options.data) {
      url += queryStringify(options.data);
    }
    return this.request(url, { ...options, method: HTTPTransport.METHOD.GET });
  }

  public post(url: string, options: OptionsWithNoMethod = {}) {
    return this.request(url, { ...options, method: HTTPTransport.METHOD.POST });
  }

  public put(url: string, options: OptionsWithNoMethod = {}) {
    return this.request(url, { ...options, method: HTTPTransport.METHOD.PUT });
  }

  public delete(url: string, options: OptionsWithNoMethod = {}) {
    return this.request(url, { ...options, method: HTTPTransport.METHOD.DELETE });
  }

  public request(url: string, options: Options) {
    const {
      headers, data, method, timeout = 5000,
    } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      xhr.withCredentials = true;
      xhr.timeout = timeout;

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      }

      if (method === HTTPTransport.METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }

      xhr.onload = () => resolve(xhr);

      xhr.onabort = () => reject(new Error(HTTPTransport.Error.ERR_CONNECTION_ABORTED));
      xhr.ontimeout = () => reject(new Error(HTTPTransport.Error.ERR_CONNECTION_TIMED_OUT));
      xhr.onerror = () => reject(new Error(HTTPTransport.Error.ERR_CONNECTION_ERROR));
    });
  }
}
