// //AULA 150 - 151 login

const callback_ok = ()=>{
    Swal.fire({
        icon: 'success',
        title: 'Logado com sucesso',
        showConfirmButton: false,
        backdrop: `rgba(0,0,0,0.4)`,
        width: 500,
        timer: 2000
      })

};

const callback_not = () =>{
    Swal.fire({
        title: 'Oops...!',
        text: 'Usuário e senha incorretos',
        icon: 'error',
        backdrop: `rgba(0,0,0,0.4)`,
        width: 500,
        timer: 4000,
        showConfirmButton: false
        
      })
};

const configLogin = {
  cor: "048" ,
  img: "../logos/logo.png",
  endpoint: "https://login.deluxdelux1.repl.co"
}

Login.login(callback_ok,callback_not, configLogin);
