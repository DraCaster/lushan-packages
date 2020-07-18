/**
 * 2020 - Github: DraCaster 
 * Lujan Rojas - lujanrojas.informatica@gmail.com
 */
import path from 'path'
import fs from 'fs'

module.export.exportCsv = (entity,headers,cursor, baseUrl,destinationFolder) => {

    return new Promise(async (resolve, reject) => {

        let random = randomstring(3)

        let filename = "report-" + entity + "-" + random + ".csv"

        const dst = path.join(destinationFolder, filename)

        fs.appendFile(dst, headers + '\n', (err) => { (err) ? console.error(err) : {} })

        for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {

            let data = ''
            headers.forEach(key => {
                data += doc[key] + ','
            })

            data += '\n'
            fs.appendFile(dst, data, (err) => { (err) ? console.error(err) : {} })
        }
        let url = baseUrl + '/' + dst
        resolve(url)
    })
}

const randomstring = length => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}