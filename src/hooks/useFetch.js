import { useState } from 'react';

export const URL_MESSAGE = 'https://api.chucknorris.io/';

export default function useFetch(baseUrl) {
  const [loading, setLoading] = useState(true);

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            return reject(data);
          }
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(setLoading(false));
    });
  }
  return { get, loading };
}
