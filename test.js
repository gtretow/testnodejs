const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o nome do herói: ", (heroName) => {
  rl.question("Digite a quantidade de XP do herói: ", (xp) => {
    const heroXp = parseInt(xp);
    let level;

    if (heroXp < 1000) {
      level = "Ferro";
    } else if (heroXp >= 1001 && heroXp <= 2000) {
      level = "Bronze";
    } else if (heroXp >= 2001 && heroXp <= 5000) {
      level = "Prata";
    } else if (heroXp >= 5001 && heroXp <= 7000) {
      level = "Ouro";
    } else if (heroXp >= 7001 && heroXp <= 8000) {
      level = "Platina";
    } else if (heroXp >= 8001 && heroXp <= 9000) {
      level = "Ascendente";
    } else if (heroXp >= 9001 && heroXp <= 10000) {
      level = "Imortal";
    } else {
      level = "Radiante";
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${level}`);
    rl.close();
  });
});
