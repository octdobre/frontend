

for(var i = 0; i < 5; i++){
    console.log("for loop count", i);
}

i = 0;
while(i < 5){
    console.log("while loop count", i);
    i++;
}

//nested loops

for (var year = 2023; year < 2025; year++){
    console.log(year);
    for(var month = 6; month < 9; month ++){
        console.log("----",month);
    }
}

//styling console output using CSS with a %c format specifier
var cubes = 'ABCDEFG';
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}