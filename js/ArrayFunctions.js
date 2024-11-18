const arr=[5,10,15,20];

// data reprensent a value in the array
// .map returns a new array
const newArr=arr.map(data=>data*10);
console.log(newArr);

// filter odd number from an array
const data=[2,5,6,12,19];

const oddArr=data.filter(item=>item%2!=0);
console.log(oddArr);


const peoples=[{
    name:"Swikriti",
    gender:"female"
},
{
    name:"Ram",
    gender:"male"
},
{
    name:"Aastha",
    gender:"female"
},
{
    name:"Sujan",
    gender:"male"
},
]

const filterMale=peoples.filter(item=>item.gender==="male");
console.log(filterMale);