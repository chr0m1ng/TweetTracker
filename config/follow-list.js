const followListId = [
    {name : 'coolstar', id : '379029313'},
    {name : 'nullpixel', id : '1039857037'},
    {name : 'ianbeer', id : '938035181201580032'},
    {name : 'Jonathan Levin', id : '4717171521'},
    {name : 'Jonh Akerblom', id : '2879687848'},
    {name : 'Electra Team', id : '1002857338141921281'},
    {name : 'Siguza', id : '149873270'},
    {name : 'qwertyoruiopz', id : '346380319'},
    {name : 'Gabriel Santos', id : '613174840'}
];


const followListString = followListId.reduce(function(prevVal,currVal,idx){
    return idx == 0 ? currVal.id : prevVal + ', ' + currVal.id;
}, '');


module.exports = {
    followListId, 
    followListString
};