const fs = require('fs');
const validation = require('./validation');

const rawData = fs.readFileSync('./dissertation-adapter/data.json');
const data = JSON.parse(rawData);


// data.map(x => {
//     if(!validation.validate(validation.pdssValidator,x)) {console.log(x['Number'],x['Timepoint'])}
// });
// data.map( x => {
//     if(validation.summaryStatistics(x)) {console.log(x['Number'],x['Timepoint'])}
// });

// let target = data.filter( (x) => x['Number'] === 64 && x['Timepoint'] === 0  )
// console.log(target)
// //console.log(sixzero[0]['PDQSI'])
// console.log(typeof sixzero[0]['PDQSI'] === 'number')
// console.log(sixzero[0]['PDQSI'] !== undefined)
// console.log(sixzero[0]['PDQSI'] !== 'N/A')
// console.log(validation.summaryStatistics(sixzero[0]))

console.log(data.length);
console.log('Valid HADS results')
var hadsKeys = [
    'HADS-TENSE',
    'HADS-ENJOY',
    'HADS-FRIGHT',
    'HADS-LAUGH',
    'HADS-WORRY',
    'HADS-CHEER',
    'HADS-EASE',
    'HADS-SLOW',
    'HADS-BUTTERFLY',
    'HADS-INTEREST',
    'HADS-RESTLESS',
    'HADS-FORWARD',
    'HADS-PANIC',
    'HADS-BOOK'
]
var hads = data.filter(x => validation.validate(hadsKeys,x))
console.log(hads.length);

console.log('Valid PDSS results')
var pdssKeys = [
    'PDSS-1',
    'PDSS-2',
    'PDSS-3',
    'PDSS-4',
    'PDSS-5',
    'PDSS-6',
    'PDSS-7',
    'PDSS-8',
    'PDSS-9',
    'PDSS-10',
    'PDSS-11',
    'PDSS-12',
    'PDSS-13',
    'PDSS-14',
    'PDSS-15'
]
var pdss = data.filter(x => validation.validate(pdssKeys,x))
console.log(pdss.length);

console.log('Valid NMS results')
var nmskeys = [
    'NMS-1',
    'NMS-2',
    'NMS-3',
    'NMS-4',
    'NMS-5',
    'NMS-6',
    'NMS-7',
    'NMS-8',
    'NMS-9',
    'NMS-10',
    'NMS-11',
    'NMS-12',
    'NMS-13',
    'NMS-14',
    'NMS-15',
    'NMS-16',
    'NMS-17',
    'NMS-18',
    'NMS-19',
    'NMS-20',
    'NMS-21',
    'NMS-22',
    'NMS-23',
    'NMS-24',
    'NMS-25',
    'NMS-26',
    'NMS-27',
    'NMS-28',
    'NMS-29',
    'NMS-30',
    'NMS-31'
]
var nms = data.filter(x => validation.validate(nmskeys,x))
console.log(nms.length);

console.log('Valid NMS - no sex results')
var noSexKeys = [
    'NMS-1',
    'NMS-2',
    'NMS-3',
    'NMS-4',
    'NMS-5',
    'NMS-6',
    'NMS-7',
    'NMS-8',
    'NMS-9',
    'NMS-10',
    'NMS-11',
    'NMS-12',
    'NMS-13',
    'NMS-14',
    'NMS-15',
    'NMS-16',
    'NMS-17',
    'NMS-20',
    'NMS-21',
    'NMS-22',
    'NMS-23',
    'NMS-24',
    'NMS-25',
    'NMS-26',
    'NMS-27',
    'NMS-28',
    'NMS-29',
    'NMS-30'
]
var nmsNo = data.filter(x => validation.validate(noSexKeys,x))
console.log(nmsNo.length);

console.log('Valid UPDRS results')
var updrsKeys = [
    'UPDRS-2.1',
    'UPDRS-2.2',
    'UPDRS-2.3',
    'UPDRS-2.4',
    'UPDRS-2.5',
    'UPDRS-2.6',
    'UPDRS-2.7',
    'UPDRS-2.8',
    'UPDRS-2.9',
    'UPDRS-2.10',
    'UPDRS-2.11',
    'UPDRS-2.12',
    'UPDRS-2.13'
]
var updrs = data.filter(x => validation.validate(updrsKeys,x))
console.log(updrs.length);

console.log('Valid PDQ8 results')
var pdq8Keys = [
    'PDQ8-1',
    'PDQ8-2',
    'PDQ8-3',
    'PDQ8-4',
    'PDQ8-5',
    'PDQ8-6',
    'PDQ8-7',
    'PDQ8-8'
]
var pdq8 = data.filter(x => validation.validate(pdq8Keys,x))
console.log(pdq8.length);

console.log('Valid PDQ39 results')
var pdq39keys = [
    'PDQ39-1',
        'PDQ39-2',
        'PDQ39-3',
        'PDQ39-4',
        'PDQ39-5',
        'PDQ39-6',
        'PDQ39-7',
        'PDQ39-8',
        'PDQ39-9',
        'PDQ39-10',
        'PDQ39-11',
        'PDQ39-12',
        'PDQ39-13',
        'PDQ39-14',
        'PDQ39-15',
        'PDQ39-16',
        'PDQ39-17',
        'PDQ39-18',
        'PDQ39-19',
        'PDQ39-20',
        'PDQ39-21',
        'PDQ39-22',
        'PDQ39-23',
        'PDQ39-24',
        'PDQ39-25',
        'PDQ39-26',
        'PDQ39-27',
        'PDQ39-28',
        'PDQ39-29',
        'PDQ39-30',
        'PDQ39-31',
        'PDQ39-32',
        'PDQ39-33',
        'PDQ39-34',
        'PDQ39-35',
        'PDQ39-36',
        'PDQ39-37',
        'PDQ39-38',
        'PDQ39-39'
]
var pdq39 = data.filter(x => validation.validate(pdq39keys,x))
console.log(pdq39.length);

console.log('Valid PDQC results')
var pdqcKeys = [
    'PDQC-1',
    'PDQC-2',
    'PDQC-3',
    'PDQC-4',
    'PDQC-5',
    'PDQC-6',
    'PDQC-7',
    'PDQC-8',
    'PDQC-9',
    'PDQC-10',
    'PDQC-11',
    'PDQC-12',
    'PDQC-13',
    'PDQC-14',
    'PDQC-15',
    'PDQC-16',
    'PDQC-17',
    'PDQC-18',
    'PDQC-19',
    'PDQC-20',
    'PDQC-21',
    'PDQC-22',
    'PDQC-23',
    'PDQC-24',
    'PDQC-25',
    'PDQC-26',
    'PDQC-27',
    'PDQC-28',
    'PDQC-29'
]
var pdqc = data.filter(x => validation.validate(pdqcKeys,x))
console.log(pdqc.length);

console.log('summary stats')
var summaryKeys = [
    'NMS-TOTAL',
    'PDSS-TOTAL',
    'PDQ8-TOTAL',
    'PDQ8-PDQSI',
    'Anxiety',
    'Depression',
    'BKS',
    'DKS',
    'FDS',
    'PTI',
    'PTT',
    'PDQ39-PDQSI',
    'PDQ39-Mob',
    'PDQ39-ADL',
    'PDQ39-Emot',
    'PDQ39-Stigma',
    'PDQ39-Soc-Sup',
    'PDQ39-Cog',
    'PDQ39-Comm',
    'PDQ39-Discom',
    'UPDRS-TOTAL',
    'PDQC-PDQSI',
    'PDQC-social/personal-activities',
    'PDQC-anx/dep',
    'PDQC-Self-care',
    'PDQC-Stress'
];
var summers = data.filter( x => validation.validate(summaryKeys,x));
console.log(summers.length);