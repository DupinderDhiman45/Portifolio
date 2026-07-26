let webSeries = ["Breaking Bad" , "Game of Thrones" , "Better Call Saul" , "Money Heist" , "Vikings"]
console.log(webSeries[0]);
console.log(webSeries[4]);

console.log(webSeries.push("Interstellar"));
console.log(webSeries.shift());
console.log(webSeries.includes("Interstellar"));
console.log(webSeries.indexof());
console.log(webSeries.join("|"));
console.log(webSeries.slice(1,3));
console.log(webSeries.splice(2));
for (  let i=0;i<webSeries.length;i++){
    console.log(webSeries[i]);
}
// replace //
webSeries[1] = "Dark";



