$(function () {

  $("#form").validate({
    debug: true,
    rules: {
      nome: { required: true, minlength: 10 }
    },
    messages: {
      nome: {
        required: "<li>Insira seu nome, por favor!.</li>",
        minlength: "<li>Nome muito curto. Insira um nome maior!</li>"
      }

    }
  });

  $('.mascara-cpf').mask('999.999.999-99');

  $("#cel").mask("(99)9999-9999?9");

});

