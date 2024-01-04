var posicao;
var score = 0;
var clicked = false;
function gerar() {
	let gride = document.getElementById("gride");
	gride.style.backgroundColor = "white";
	let red1 = Math.floor(Math.random() * 256);
	let blue1 = Math.floor(Math.random() * 256);
	let green1 = Math.floor(Math.random() * 256);
	let red0 = Math.floor(Math.random() * 256);
	let blue0 = Math.floor(Math.random() * 256);
	let green0 = Math.floor(Math.random() * 256);
	let red2 = Math.floor(Math.random() * 256);
	let blue2 = Math.floor(Math.random() * 256);
	let green2 = Math.floor(Math.random() * 256);
	posicao = Math.floor(Math.random() * 3);
	if (posicao == 0) {
		document.getElementById('redValue').textContent = red0;
    	document.getElementById('greenValue').textContent = green0;
    	document.getElementById('blueValue').textContent = blue0;
	} else if (posicao == 1) {
		document.getElementById('redValue').textContent = red1;
    	document.getElementById('greenValue').textContent = green1;
    	document.getElementById('blueValue').textContent = blue1;
	} else if (posicao == 2) {
		document.getElementById('redValue').textContent = red2;
    	document.getElementById('greenValue').textContent = green2;
    	document.getElementById('blueValue').textContent = blue2;
	}
	btn1 = document.getElementById("1");
	btn1.style.backgroundColor = "rgb("+red0+", "+green0+", "+blue0+")";
	btn2 = document.getElementById("2");
	btn2.style.backgroundColor = "rgb("+red1+", "+green1+", "+blue1+")";
	btn3 = document.getElementById("3");
	btn3.style.backgroundColor = "rgb("+red2+", "+green2+", "+blue2+")";
	document.getElementById('pontos').textContent = 'Pontos: ' + score;
	clicked = false;
}
function resultado(num) {
	if (!clicked) { // Verifique se o usuário já clicou
        let gride = document.getElementById("gride");
        if (posicao+1 == num) {
            gride.style.backgroundColor = "#6EFF7E";
            score++; // Adicione um ponto para cada resposta correta
        } else {
            gride.style.backgroundColor = "#FF7B7B";
            if (score > 0) { // Verifique se a pontuação é maior que zero antes de subtrair
                score--; // Subtraia um ponto para cada resposta errada
            }
        }
        clicked = true;
    }
}