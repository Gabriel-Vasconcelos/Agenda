

document.querySelector("#buttonSave").onclick = criarLembrete;

// Function para verificar se há texto

function textoValido(texto){
	if(texto == null || texto == "" || texto.length < 1){
		return false;
	}
	else{
		return true;
	}
}

// Function para mostrar erros

function mostrarError(){
	let html = "";
	html += "<div class = 'alert alert-danger' role = 'alert'>";
	html += "Por favor insira algo";
	html += "</div>";

	document.querySelector("div#error").innerHTML = html;
}

// Function para limpar erros

function limparError(){
	document.querySelector("div#error").innerHTML = "";
}

// Function para criar seu lembrete

function criarLembrete(){
	let contentTextArea = document.querySelector("#text-area").value;

	if(textoValido(contentTextArea) == false){
		mostrarError();
	}else{
		limparError(); 	

		// Criando uma variável para o tempo

		let refencia = new Date();
		let id = referencia.getTime();
		let data = referencia.toLocalDateString();
		let text = contentTextArea;

		// JSON = Objetos de JavaScript

		const lembrete = {
			"id": id,
			"data": data,
			"texto": text
		};

		// Function para comprovar se existe lembrete

		comprovarLembrete(lembrete);

	}
}

function comprovarLembrete(lembrete){
	let lembreteExistentes = localStorage.getItem("lembrete");

	if(lembreteExistentes == null || lembreteExistentes == ""){
		let lembretes = [];
		lembretes.push(lembrete);

		//Salvando novo lembrete
		saveLembretes(lembretes);
	}else{
		let lembretesRecuperados = JSON.parse();
	}
}