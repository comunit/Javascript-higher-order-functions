const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2005},
  {name: "Company Four", category: "Retail", start: 1989, end: 2011},
  {name: "Company Five", category: "Technology", start: 2009, end: 2013},
  {name: "Company Six", category: "Auto", start: 1986, end: 2003},
  {name: "Company Seven", category: "Finance", start: 1983, end: 2009},
  {name: "Company Eight", category: "Technology", start: 1982, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1983, end: 2089},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 45, 25, 64, 32];


///////////////////////////////////////////////////////////////////////////////////
// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }


// foreach
// companies.forEach(function(Company) {
//   console.log(Company.name);
// });

////////////////////////////////////////////////////////////////////////////////////

// filter
// canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// const retailCompanies = companies.filter(function(Company) {
//   if (Company.category === 'Retail') {
//     return true;
//   }
// });

// const retailCompanies = companies.filter(company => company.category === 'Auto');
// console.log(retailCompanies);

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))
// ;

// const lastedTenYears = companies.filter(company => (company.end -company.start >= 10))
// ;
// console.log(lastedTenYears);

//////////////////////////////////////////////////////////////////////////////////////////////////

// map
// const companyNames = companies.map(function (company) {
//   return company.name;
// });

// const testMap = companies.map(function (company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });
  
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`
// );

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// sort
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// const sortAges = ages.sort((a, b) => b - a);

// console.log(sortAges);

//////////////////////////////////////////////////////////////////////////////////////////
// reduce

// let ageSum = 0;

// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0)

// const ageSum = ages.reduce((total, age) => { return total + age;}, 0)

// const totalYears = companies.reduce(function(total, company){
//   return total + (company.end - comapny.start);
// }, 0);

// console.log(totalYears);


const combined = ages
.map(age => age *2)
.filter(age => age >= 40)
.sort((a, b) => a -b)
.reduce((a, b) => a + b, 0);
console.log(combined);
