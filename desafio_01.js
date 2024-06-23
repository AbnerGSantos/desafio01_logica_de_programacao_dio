let nomesHerois = ['Super Man', 'Batman', 'Mulher Maravilha', 'Flash', 'Lanterna Verde', 'Aquaman', 'Caçador'];
let quantidadeXP = [11000, 4673, 2490, 8946, 6365, 192, 1112];

for (let i = 0; i < nomesHerois.length; i++) {
    let nome = nomesHerois[i];
    let xp = quantidadeXP[i];
    let nivelHeroi = '';

    if (xp < 1000) {
        nivelHeroi = 'Ferro';
    } else if (xp >= 1001 && xp <= 2000) {
        nivelHeroi = 'Bronze';
    } else if (xp >= 2001 && xp <= 5000) {
        nivelHeroi = 'Prata';
    } else if (xp >= 5001 && xp <= 7000) {
        nivelHeroi = 'Ouro';
    } else if (xp >= 7001 && xp <= 8000) {
        nivelHeroi = 'Platina';
    } else if (xp >= 8001 && xp <= 9000) {
        nivelHeroi = 'Ascendente';
    } else if (xp >= 9001 && xp <= 10000) {
        nivelHeroi = 'Imortal';
    } else {
        nivelHeroi = 'Radiante';
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivelHeroi}`);
}



