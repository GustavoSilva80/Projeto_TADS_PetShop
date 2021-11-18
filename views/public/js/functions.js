
function showRegisterScreen () {
    let wrapper = document.querySelector(".wrapper");
    let wrapper_cadastro = document.querySelector('.wrapper_cadastro');
    
    if(wrapper.className == "wrapper" && wrapper_cadastro.className == "wrapper_cadastro"){
        wrapper.classList.add('wrapper_off');
        wrapper_cadastro.classList.add('wrapper_cadastro_active');
    }
    
}


function backforLogin(){
    
    let wrapper = document.querySelector(".wrapper");
    let wrapper_cadastro = document.querySelector('.wrapper_cadastro');

    wrapper.classList.remove('wrapper_off')
    wrapper_cadastro.classList.remove('wrapper_cadastro_active')
}


function showAgendamento(){
    let agendamento = document.querySelector('.agendamento');
    
    if(agendamento.className = "agendamento"){
        agendamento.classList.add("agendamento_active");
    }else{
        closeWindow();
    }
}


function closeWindow(){
    
    let agendamento = document.querySelector(".agendamento");

    agendamento.classList.remove('agendamento_active')
    
}
