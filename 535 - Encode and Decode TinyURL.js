// leetcode.com/problems/encode-and-decode-tinyurl

/*
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work.
You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
*/

const charList = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const urlMap = new Map();
const tinyURL = 'http://tinyurl.com';
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let key = '';

    while (key.length <= 7) {
      const randCharIndex = Math.floor((Math.random() * 1000000)) % charList.length;
      key += charList.charAt(randCharIndex);
    }

    let index = 0;
    let mapArray;

    if (urlMap.has(key)) {
      mapArray = Array.from(urlMap.get(key)).push(longUrl);
      index = newList.index - 1;
    } else {
      mapArray = [ longUrl ];
    }

    urlMap.set(key, mapArray);

    return `${tinyURL}/${key}_${index}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    const keyAndIndexAndParameter = shortUrl.slice(shortUrl.lastIndexOf('/') + 1).split('_');
    const indexAndParameter = keyAndIndexAndParameter[1].split('?');

    const key = keyAndIndexAndParameter[0];
    const index = Number(indexAndParameter[0]);

    const orgUrl = urlMap.get(key)[index];

    return orgUrl;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
