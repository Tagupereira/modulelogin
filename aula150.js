// //AULA 141 - 149 login

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

Login.login(callback_ok,callback_not);
