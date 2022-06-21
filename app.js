let names = ['qais', 'faisal', 'zaheb'];
let lastName = 'zaheb';
let newArray =[];

for(let i = 0; i < names.length; i++){
    let fullName = `${names[i]} ${lastName}`;
    newArray.push(fullName);
}
console.log(newArray);