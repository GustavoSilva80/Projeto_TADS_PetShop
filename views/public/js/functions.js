
//Botões navbar
const btnVeterinario = document.getElementById("btnVeterinario");
const btnBanho = document.getElementById("btnBanho");
const btnHome = document.getElementById("btnHome")
const btnClientes = document.getElementById("btnClientes");

//Páginas do painel
const homePage = document.getElementById("home");
const agendamentoPage = document.getElementById("agendamento");
const banhoPage = document.getElementById("banho");
const clientesPage = document.getElementById("clientes");

//Eventos para alterar entre as páginas do painel
btnVeterinario.addEventListener("click", showAgendamento);
btnBanho.addEventListener("click", showBanho);
btnHome.addEventListener("click", showHome);
btnClientes.addEventListener("click",showClientesScreen);



//Funções alterar páginas painel
function showAgendamento(){
    agendamentoPage.style.display = "block";
    banhoPage.style.display = "none";
    homePage.style.display = "none";
    clientesPage.style.display = "none";

}

function showBanho(){
    banhoPage.style.display = "block";
    agendamentoPage.style.display = "none";
    homePage.style.display = "none";
    clientesPage.style.display = "none";

}
function showHome(){
    homePage.style.display = "block";
    agendamentoPage.style.display = "none";
    banhoPage.style.display = "none";
    clientesPage.style.display = "none";
    
}
function showClientesScreen(){
    clientesPage.style.display = "block";
    agendamentoPage.style.display = "none";
    banhoPage.style.display = "none";
    homePage.style.display = "none";
}




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