var fred = ['fred', 'flinestone', 'fred@gmail.com', 50 ];

console.log('length =', fred.length)

//for(var i = 0; i < fred.lengthh; i++) {
 for (var i in fred) { 
     if (i == 0)
        console.log ('First name: ', fred[i])
    else if (i == 1)
        console.log ('Last name: ', fred[i])
    else if (i == 2)
        console.log ('Email name: ', fred[i])
    else if (i == 3)
        console.log('Age', fred[i])


    console.log(i);
    console.log(fred[i]);
    
}
