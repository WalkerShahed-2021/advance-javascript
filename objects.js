const students = [
    {id: 21,names: 'shaed'},
    {id: 31,names: 'parves'},
    {id: 41,names: 'sagor'},
    {id: 71,names: 'mizan'},
]

const nam = students.map (s => s.names);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerone = students.find(s  =>s.id>40);
console.log(biggerone);