import * as request from "request";
import * as Promise from "bluebird";
import { PrintNodeError } from "./requests.interface";

const endpoint = "https://api.printnode.com";
const key = "https://api.printnode.com";

/**
 * @param path string
 *
 * @return Promise<object>
 */
export function getRequest(path: string): Promise<object> {
  return new Promise((resolve, reject) => {
    request.get(
      endpoint + path,
      {
        auth: {
          user: key,
          sendImmediately: false
        }
      },
      (err, res, body) => {
        if (err) reject(err);
        if (res && res.statusCode !== 401) {
          resolve(JSON.parse(body));
        } else {
          reject(JSON.parse(body) as PrintNodeError);
        }
      }
    );
  });
}

/**
 * @param path string
 * @param params object
 *
 * @return Promise<object>
 */
export function postRequest(path: string, params: object): Promise<object> {
  return new Promise((resolve, reject) => {
    request.post(
      endpoint + path,
      {
        auth: {
          user: key,
          sendImmediately: false
        },
        form: params
      },
      (err, res, body) => {
        if (err) reject(err);
        if (res && res.statusCode !== 401) {
          resolve(JSON.parse(body));
        } else {
          reject(JSON.parse(body) as PrintNodeError);
        }
      }
    );
  });
}
