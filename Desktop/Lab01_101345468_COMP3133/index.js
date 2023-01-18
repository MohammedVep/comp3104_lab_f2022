const fs = require('fs');
const csv = require('csv-parser')
// Step 3 a
try {
    fs.unlinkSync('canada.txt')
    fs.unlinkSync('usa.txt')
} catch (err) {

}

//Step 3 b and Step 3 c
fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (data) => {
        if (data.country === 'Canada'){
            fs.appendFileSync('canada.txt', `${data.country}, ${data.year}, ${data.population}\n`)
        }
        if (data.country === 'United States'){
            fs.appendFileSync('usa.txt', `${data.country}, ${data.year}, ${data.population}\n`)
        }
    });