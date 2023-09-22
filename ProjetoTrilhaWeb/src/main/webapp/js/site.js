function validaFaleConosco() {
	//validação nome
	if (document.frmfaleconosco.txtnome.value == "") {
		alert("Preencha o campo Nome.");
		document.frmfaleconosco.txtnome.focus();
		return false;
	}
	//validação telefone
	if (document.frmfaleconosco.txttelefone.value.length != 11) {
		alert("O número deve ter 11 digítos com o DDD sem espaços ou caracteres!");
		document.frmfaleconosco.txttelefone.focus();
		return false;
	}
	//validação do email
	if (document.frmfaleconosco.txtemail.value == "") {
		alert("Insira o e-mail corretamente: ( nome@plataforma.com ).");
		document.frmfaleconosco.txtemail.focus();
		return false;
	}
	//validação do motivo
	if (document.frmfaleconosco.selmotivo.value != "RE") {
		if (document.frmfaleconosco.selmotivo.value != "SU") {
			if (document.frmfaleconosco.selmotivo.value != "PR") {
				alert("Escolha um motivo válido!")
				document.frmfaleconosco.selmotivo.focus();
				return false;
			} 
		}
	}
	//validação motivo-produto
	if (document.frmfaleconosco.selmotivo.value == "PR") {
		if (document.frmfaleconosco.selproduto.value != "FR") {
			alert("Escolha um motivo válido!")
			document.frmfaleconosco.selproduto.focus();
			return false;
		}
	}

	//validação do comentário
	if (document.frmfaleconosco.txacomentario.value.length < 80) {
		alert("Decreva o motivo do contato em pelo menos 2 linhas cheias!")
		document.frmfaleconosco.txacomentario.focus();
		return false;
	}
	return true;
}

function verificaMotivo(motivo) {
	//capturamos a estrutura da div cujo ID é opcaoProduto na variável elemento
	var elemento = document.getElementById("opcaoProduto");

	//se o valor da variavel motivo for "PR"
	if (motivo == "PR") {
		//criamos um elemento (tag) <select> e guardamos na variavel homonima
		var select = document.createElement("select");
		//setamos nesse novo select o atributo 'name' com o valor 'selproduto'
		select.setAttribute("name", "selproduto");
		//conteudo atual da variavel select:
		//<select name="selproduto"></select>

		//criamos um elemento (tag) <option> e guardamos na váriavel hamônima
		var option = document.createElement("option");
		//setamos nesse novo option o atributo 'value' com o valor vazio
		option.setAttribute("value", "");
		var texto = document.createTextNode("Escolha");
		//colocamos o nó de texto criado como "filho" da tag option criada
		option.appendChild(texto);
		//conteúdo atual da variável option:
		//<option value"">Escolha</option>

		//colocamos o option criado como "filho" da tag select criada
		select.appendChild(option);
		//conteúdo atual da variável select:
		//<select name="selproduto"><option value="">Escolha</option></select>

		//criamos um elemento (tag) <option> e guardamos na variavel homonima
		var option = document.createElement("option");
		//setamos nesse novo option o atributo 'value' com o valor "FR"
		option.setAttribute("value", "FR");
		//criamos um nó de texto "Freezer" e gravamos na váriavel 'texto'
		var texto = document.createTextNode("Freezer");
		//colocamos o nó de texto criado como "filho" da tag option criada
		option.appendChild(texto)
		//conteúdo atual da váriavel option:
		//<option value="FR">Freezer</option>

		//colocamos o option criado como "filho" da tag select criada
		select.appendChild(option);
		//conteúdo atual da variável select:
		/*
		<select name="selproduto">
			<option value="">Escolha</option><option value="FR">Freezer</option>
		</select> 
		*/

		//Colocamos o select criado como "filho" da tag div capturada no inicio da função
		elemento.appendChild(select);
		//se o valor da variavel motivo não for "PR"...
	} else {
		//se a div possuir algum "primeiro filho"
		if (elemento.firstChild)
			//removemos ele
			elemento.removeChild(elemento.firstChild);
	}
}//fim da função verificaMotivo
















