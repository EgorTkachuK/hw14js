
// 1

// let ppl = [

//   {  name : "Oslo" , eyeColor : "blue" , gender : "male" , isActive : false , email : "oslo@gmail.com"  , age : 700} , 
//   {  name : "Bruno" , eyeColor : "yellow" , gender : "male" , isActive : true , email : "Bruno@gmail.com"  , age : 800} , 
    
// ]

// let allNames = ppl.map(person => person.name)


// console.log(allNames) 

// 2
// let ppl = [

//       {  name : "Oslo" , eyeColor : "blue" , gender : "male" , isActive : false , email : "oslo@gmail.com"  , age : 700} , 
//       {  name : "Bruno" , eyeColor : "yellow" , gender : "male" , isActive : true , email : "Bruno@gmail.com"  , age : 800} , 
//       {  name : "Huevo" , eyeColor : "yellow" , gender : "male" , isActive : true , email : "Bruno@gmail.com"  , age : 800} , 
        
//     ]
    
//     let getUsersByEyeColor = (users, color) => {
//         return users.filter(user => user.eyeColor === color);
//       };
      
//       let choosedColorPpl = getUsersByEyeColor(ppl , "yellow");
    
    
//     console.log(choosedColorPpl) 

// 3

// let ppl = [

//       {  name : "Oslo" , eyeColor : "blue" , gender : "female" , isActive : false , email : "oslo@gmail.com"  , age : 700} , 
//       {  name : "Bruno" , eyeColor : "yellow" , gender : "male" , isActive : true , email : "Bruno@gmail.com"  , age : 800} , 
//       {  name : "Huevo" , eyeColor : "yellow" , gender : "male" , isActive : true , email : "Bruno@gmail.com"  , age : 800} , 
        
//     ]
    
//     let getUsersByGender = (users, gender) => {
//         return users.filter(user => user.gender === gender);
//       };
      
//       let choosedGenderPpl = getUsersByGender(ppl , "male");
    
    
//     console.log(choosedGenderPpl.map(person => person.name)) 

// 4

// let ppl = [

//       {  name : "Oslo" , eyeColor : "blue" , gender : "female" , isActive : "false" , email : "oslo@gmail.com"  , age : 700} , 
//       {  name : "Bruno" , eyeColor : "yellow" , gender : "male" , isActive : "true" , email : "Bruno@gmail.com"  , age : 800} , 
//       {  name : "Huevo" , eyeColor : "yellow" , gender : "male" , isActive : "true" , email : "Bruno@gmail.com"  , age : 800} , 
        
//     ]

// let getUsersByActivty = (  users ,  status) => {

// return users.filter( user => user.isActive === status)

// }

// let choosedStatusPpl = getUsersByActivty( ppl ,  "false")

// console.log(choosedStatusPpl)

// 5

// let ppl = [

//       {  name : "Oslo" , eyeColor : "blue" , gender : "female" , isActive : "false" , email : "oslo@gmail.com"  , age : 700} , 
//       {  name : "Bruno" , eyeColor : "yellow" , gender : "male" , isActive : "true" , email : "Bruno@gmail.com"  , age : 800} , 
//       {  name : "Huevo" , eyeColor : "yellow" , gender : "male" , isActive : "true" , email : "Huevo@gmail.com"  , age : 800} , 
        
//     ]

// let getUsersByEmail = (  users ,  email) => {

// return users.filter( user => user.email === email)

// }

// let choosedemailPpl = getUsersByEmail( ppl ,  "Huevo@gmail.com")

// console.log(choosedemailPpl.map(person => person.name)) 

// 6

// let ppl = [

//       {  name : "Oslo" , eyeColor : "blue" , gender : "female" , isActive : "false" , email : "oslo@gmail.com"  , age : 700} , 
//       {  name : "Bruno" , eyeColor : "yellow" , gender : "male" , isActive : "true" , email : "Bruno@gmail.com"  , age : 800} , 
//       {  name : "Huevo" , eyeColor : "yellow" , gender : "male" , isActive : "true" , email : "Huevo@gmail.com"  , age : 800} , 
        
//     ]

// let filter = ppl.filter(user => user.age < 850 && user.age > 700 )


// console.log(filter) 
