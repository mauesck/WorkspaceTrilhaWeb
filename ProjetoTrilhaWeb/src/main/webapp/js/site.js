function validaFaleConosco() {
	//validação nome com expressões regulares
	var nome = document.frmfaleconosco.txtnome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

	if (!expRegNome.test(nome)) {
		alert("Primeiro nome com no minímo 3 letras. \n" + "Sobrenome com no minímo 2 letras.");
		document.frmfaleconosco.txtnome.focus();
		return false;
	}
	//validação telefone com expressões regulares
	var fone = document.frmfaleconosco.txttelefone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	
	if (!expRegFone.test(fone)) {
		alert("Insira da forma correta com todos os caracteres: (**)*****-****");
		document.frmfaleconosco.txttelefone.focus();
		return false;
	}
	//validação do email
	var email = document.frmfaleconosco.txtemail.value;
	var expRegEmail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
	
	if (!expRegEmail.test(email)) {
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

//jQuery

//assim queo documento html for carregado por completo...
$(document).ready(function(){
	//carrega cabeçalho, menu e rodapé aos respectivos locais
	$("header").load("/ProjetoTrilhaWeb/pages/site/general/cabecalho.html");
	$("nav").load("/ProjetoTrilhaWeb/pages/site/general/menu.html");
	$("footer").load("/ProjetoTrilhaWeb/pages/site/general/rodape.html");
});














