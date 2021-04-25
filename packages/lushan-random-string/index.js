/**
 * @fileoverview index.js Generate a random string.
 *
 * @version                               1.0.0
 *
 * @author                 Lujan Rojas <lujanrojas.informatica@gmail.com>
 * @copyright              --
 *
 * History
 * v1.0.0 – First version
 * ----
 *
 */

/**
 * Generate a random string.
 * @param {number} length
 * @return {string}
 */
module.exports.randomString = length => {

    const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let CHARACTERSLENGTH = CHARACTERS.length;

    if(!length)
        length = 3

    let result = '';

    for (let i = 0; i < length; i++) {
        result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERSLENGTH));
    }

    return result;
}