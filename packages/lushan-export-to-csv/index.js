/**
 * @fileoverview index.js Export records stored in the Mongo DB, to a CSV file.
 *
 * @version                               1.0.1
 *
 * @author                 Lujan Rojas <lujanrojas.informatica@gmail.com>
 * @copyright              --
 *
 * History
 * v1.0.1 – Validations were added in the parameters, an improvement of the code was made
 * v1.0.0 – First version
 * ----
 *
 */

import path from 'path'
import fs from 'fs'
import randomString from 'lushan-random-string'

/**
 * Export records stored in the Mongo DB, to a CSV file.
 * @param {string} entityName
 * @param {array} headers
 * @param {object} cursor
 * @param {string} baseUrl
 * @param {string} destinationFolder
 * @return {Promise}
 */
module.exports.exportCsv = (entityName,headers,cursor, baseUrl,destinationFolder) => {

    if(!entityName)
        throw new Error('Error: entityName must be provided')

    if(!headers)
        throw new Error('Error: headers must be provided')

    if(!cursor)
        throw new Error('Error: cursor must be provided')

    if(!baseUrl)
        throw new Error('Error: baseUrl must be provided')

    if(!destinationFolder)
        throw new Error('Error: destinationFolder must be provided')

    return new Promise(async (resolve, reject) => {

        try {

            let filename = "report-" + entityName + "-" + randomString(3) + ".csv"

            const destination = path.join(destinationFolder, filename)

            fs.appendFile(destination, headers + '\n', (err) => {
                (err) ? console.error(err) : {}
            })

            for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {

                let data = ''
                headers.forEach(key => {
                    data += doc[key] + ','
                })

                data += '\n'
                fs.appendFile(destination, data, (err) => {
                    (err) ? console.error(err) : {}
                })
            }
            let url = baseUrl + '/' + destination
            resolve(url)
        }
        catch (error){
            reject(error)
        }
    })
}
