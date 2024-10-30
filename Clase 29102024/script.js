//codigo imperativo
for (let i = 1; i <= 10; i++) {
    console.log(`8 x ${i} = ${8 * i}`);
}
//codigo declarativo
const tablaDel8 = Array.from({ length: 10 }, (_, i) => `8 x ${i + 1} = ${8 * (i + 1)}`);
tablaDel8.forEach(linea => console.log(linea));

