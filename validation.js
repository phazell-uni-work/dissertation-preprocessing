var fs = require('fs');

const rawData = fs.readFileSync('./dissertation-adapter/data.json');
const data = JSON.parse(rawData);

// ---- Validation Objects - 1 per questionnaire ---------------------------------------------------------------------
const hadsValidation = {
    'allowedValues':[0,1,2,3],
    'keys': [
        'HADS TENSE',
        'HADS ENJOY',
        'HADS FRIGHT',
        'HADS LAUGH',
        'HADS WORRY',
        'HADS CHEER',
        'HADS EASE',
        'HADS SLOW',
        'HADS BUTTERFLY',
        'HADS INTEREST',
        'HADS RESTLESS',
        'HADS FORWARD',
        'HADS PANIC',
        'HADS BOOK'
    ]
}

const nmsValidation = {
    'allowedValues':[0,1],
    'keys': [
        'NMS1',
        'NMS2',
        'NMS3',
        'NMS4',
        'NMS5',
        'NMS6',
        'NMS7',
        'NMS8',
        'NMS9',
        'NMS10',
        'NMS11',
        'NMS12',
        'NMS13',
        'NMS14',
        'NMS15',
        'NMS16',
        'NMS17',
        'NMS18',
        'NMS19',
        'NMS20',
        'NMS21',
        'NMS22',
        'NMS23',
        'NMS24',
        'NMS25',
        'NMS26',
        'NMS27',
        'NMS28',
        'NMS29',
        'NMS30',
        'NMS31'
    ]
}

const pdqcValidation = {
    'allowedValues':[0,1,2,3,4],
    'keys': [
        'pdqc 1',
        'pdqc 2',
        'pdqc 3',
        'pdqc 4',
        'pdqc 5',
        'pdqc 6',
        'pdqc 7',
        'pdqc 8',
        'pdqc 9',
        'pdqc 10',
        'pdqc 11',
        'pdqc 12',
        'pdqc 13',
        'pdqc 14',
        'pdqc 15',
        'pdqc 16',
        'pdqc 17',
        'pdqc 18',
        'pdqc 19',
        'pdqc 20',
        'pdqc 21',
        'pdqc 22',
        'pdqc 23',
        'pdqc 24',
        'pdqc 25',
        'pdqc 26',
        'pdqc 27',
        'pdqc 28',
        'pdqc 29'
    ]
}

const updrsValidation = {
    'allowedValues':[0,1,2,3,4],
    'keys': [
        '2.1',
        '2.2',
        '2.3',
        '2.4',
        '2.5',
        '2.6',
        '2.7',
        '2.8',
        '2.9',
        '2.10',
        '2.11',
        '2.12',
        '2.13'
    ]
}

const pdssValidation = {
    'allowedValues':[0,1,2,3,4],
    'keys': [
        'PDSS1',
        'PDSS2',
        'PDSS3',
        'PDSS4',
        'PDSS5',
        'PDSS6',
        'PDSS7',
        'PDSS8',
        'PDSS9',
        'PDSS10',
        'PDSS11',
        'PDSS12',
        'PDSS13',
        'PDSS14',
        'PDSS15'
    ]
}

// const pdq8Validation = {
//     'allowedValues':[0,1,2,3],
//     'keys': []
// }

// const Validation = {
//     'allowedValues':[],
//     'keys': []
// }

// const Validation = {
//     'allowedValues':[],
//     'keys': []
// }

// -------------- Validation Function --------------------------------------------------------

function validate(validationObject,dataObject) {
    let output = [];
    validationObject.keys.forEach(key => {
        if(key in dataObject) {            
            output.push(
                validationObject.allowedValues.includes(dataObject[key])
            );            
        } else {
            output.push(false);
            console.log('%s key not found',key);
        }
    });
    return output.reduce((a,b) => {return a && b});
}

data.map(x => {
    if(!validate(pdssValidation,x)) {console.log(x['Number'],x['Timepoint'])}
});
