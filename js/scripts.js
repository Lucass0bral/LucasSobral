window.addEventListener("DOMContentLoaded", function() {
    
    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Sua mensagem foi enviada com sucesso!!!";
      document.querySelector(".nomevalido").style.display="none";
      document.querySelector(".emailvalido").style.display="none";
      document.querySelector(".assvalido").style.display="none";
      document.querySelector(".menvalido").style.display="none";
      document.querySelector(".valido").style.display="block";
    }

    function error() {
      document.querySelector("#my-form-status").style.display="none";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });

 
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

function validacao(){
    
    //testar se o campo nome encontra-se vazio
    var nome = document.querySelector('#exampleInputName1').value;
    if(nome==''||nome==null){ 
        document.querySelector(".nome").classList.add("nomeinvalido");
        document.querySelector(".nomeform").classList.add("invalido");
        event.preventDefault();         
    }else{
        document.querySelector(".nomevalido").style.display="block";
    }
     
    //testar se o campo email encontra-se vazio
    var email = document.querySelector('#exampleInputEmail1').value;
    var validaremail =/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if((email==''|| email==null)){
        document.querySelector(".email").classList.add("emailinvalido");
        document.querySelector(".emailform").classList.add("invalido");
        event.preventDefault(); 
    }else if(!validaremail.test(email) && (email!='')){ 
        document.querySelector(".correctemail").style.display="block";
        document.querySelector(".emailform").classList.add("invalido");
        event.preventDefault();   
    }else{
        document.querySelector(".emailvalido").style.display="block";
        document.querySelector(".correctemail").style.display="none";
    }       

    //testar se o campo assunto encontra-se vazio
    var assunto = document.querySelector('#exampleInputTopic1').value;
    if(assunto==''|| assunto==null){
        document.querySelector(".ass").classList.add("assinvalido");
        document.querySelector(".assform").classList.add("invalido");
        event.preventDefault(); 
    }else{
        document.querySelector(".assvalido").style.display="block";
    }
    
    //testar se o campo mensagem encontra-se vazio
    var mensagem = document.querySelector('#exampleFormControlTextarea1').value;
    if (mensagem==''|| mensagem==null){
        document.querySelector(".men").classList.add("meninvalido");
        document.querySelector(".menform").classList.add("invalido");
        event.preventDefault();
    }else{
        document.querySelector(".menvalido").style.display="block";
    }

    return true;
}

function reinicionome(){

    //retirar a cor do alerta e reiniciar o campo nome
    document.querySelector(".nome").classList.remove("nomeinvalido");
    document.querySelector(".nomeform").classList.remove("invalido");
    document.querySelector(".nomevalido").style.display="none";
}

function reinicioemail(){

    //retirar a cor do alerta e reiniciar o campo e-mail
    document.querySelector(".email").classList.remove("emailinvalido");
    document.querySelector(".emailform").classList.remove("invalido");
    document.querySelector(".emailvalido").style.display="none";
    document.querySelector(".correctemail").style.display="none";  
}

function reinicioassunto(){

    //retirar a cor do alerta e reiniciar o campo assunto
    document.querySelector(".ass").classList.remove("assinvalido");
    document.querySelector(".assform").classList.remove("invalido");
    document.querySelector(".assvalido").style.display="none";
    
}

function reiniciomensagem(){

    //retirar a cor do alerta e reiniciar o campo mensagem
    document.querySelector(".men").classList.remove("meninvalido");
    document.querySelector(".menform").classList.remove("invalido");
    document.querySelector(".menvalido").style.display="none";
    
}
