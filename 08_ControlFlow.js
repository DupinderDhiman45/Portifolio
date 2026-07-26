// if 
const isUserLoggedIn = true 

if (isUserLoggedIn) {
console.log("executed");
}

if ( 2!= 2) {
    console.log("Fuck You");
}
else{ 
    console.log("Fuck You too");
}

const score = 200
 if ( score > 100) {
    const power = "fly"
    console.log( `User power: ${power}`);
 }

 const balance = 1000

 if (balance>500) console.log("test");

 if (balance<500){
    console.log("less than");

 } else  if (balance< 750) {
    console.log("less than 750");

 } else if (balance>1001) {
console.log("teri ben nuu lun devan");
 }
 else{ 
    console.log("muthan maroo dabb kee");
 }

 const userLoggedIn = true 
 const debitCard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true 

 if  (userLoggedIn && debitCard && 2==3) {
    console.log("Allow To Buy Course");
}

if (loggedInFromGoogle || loggedInFromEmail ){
    console.log("User Logged In");
}

  //  && all conditions must true
  //  || use as 'or' and atleast any conditions must true  

   // SWITCH //

 //  switch (key) {
   // case value :
     //   break ;
       // default :
        //break;
  // }

  const month = 3
  switch (month){
    case 1 : 
    console.log("January");
    break ;
    case 2 : 
    console.log("Feb");
    break ;
    case 3: 
    console.log("March");
    break ;
    case 4: 
    console.log("April");
    break ;
    case 5: 
    console.log("May");
    break ;
    case 6: 
    console.log("June");
    break ;

    default:
        console.log("My Enemies Are Many My Equals Are None ");
       break; 
  }
  const month1 = "April"
  switch (month1){
    case 1 : 
    console.log("January");
    break ;
    case 2 : 
    console.log("Feb");
    break ;
    case 3: 
    console.log("March");
    break ;
    case "April": 
    console.log("chut ");
    break ;
    case 5: 
    console.log("May");
    break ;
    case 6: 
    console.log("June");
    break ;
    default:
        console.log("My Enemies Are Many My Equals Are None ");
       break; 
  }

  // TRUTHY AND FALSSY 

  const userEmail = "h@hitesh.ai"
  if  (userEmail){
    console.log("Got user email");
}else {
    console.log("Don't have user email");
}

//falsy value 
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN,!true


// truthy value 
// "0" , 'false' , " " , [] , {}, function(){} ,!false

// nullish coalescing operator(??) : null , undefined 

let val1;
val1 = 5??10 
console.log(val1) ;
val2 = null?? 10 
console.log(val2);
val3 = undefined??15
console.log (val3);

val4= null??10??20
console.log(val4);

// terniary operator 
//condition ? true : false 
const chutPrice = 100
chutPrice>=80  ? console.log("hiv positive") : console.log("gaand")
chutPrice>=180  ? console.log("hiv positive") : console.log("gaand")


