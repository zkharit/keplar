const { parse } = require('csv-parse')
const fs = require('fs')

const records = []

fs.createReadStream('data/data.csv')
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    .on('data', (data) => {
        records.push(data)
    })
    .on('error', (err) => {
        console.log(err)
    })
    .on('end', () => {
        console.log('Finished')
        console.log(records)
    })