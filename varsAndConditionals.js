/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let obiwanAttack = 25
let anakinAttack = 35

if(obiwanAttack > anakinAttack){
    console.log("Obiwan is stronger")
}else if(anakinAttack > obiwanAttack){
    console.log("Anakin has the power!")
}else{
    console.log("The force is with them both")
}

let obiwanHealth = 100
let obiwanDefense = 0

obiwanDefense += 25

if(obiwanHealth <= (anakinAttack - obiwanDefense)){
    console.log('Obi-wan has been slain. At least we dont have to deal with Rey')
}else{
    obiwanHealth -= (anakinAttack - obiwanDefense)
    console.log(`Obi-wans health is ${obiwanHealth}`)
}
for(let i = 0; i < 5; i++){
    obiwanHealth -= (anakinAttack - obiwanDefense)
    console.log(`Obi-wans health is ${obiwanHealth}`)
}
