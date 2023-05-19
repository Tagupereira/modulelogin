class Login{

    static logado=false;
    static matlogado=null; // pode ser o id
    static nomelogado=null; // pode ser o nome de usuario 
    static acessologado=null;
    static styleCss = null;

    static callback_ok=null;
    static callback_not=null;

    static config = {
        cor:"048",
        img:"../logos/logo-site.png",
        endpoint: null, //"https://login.deluxdelux1.repl.co/"
    };
    

    static login=(callback_ok,callback_not,config=null)=>{
       
        if(config!=null){
            this.config = config; 
        }
        this.callback_ok=()=>{callback_ok()}
        this.callback_not=()=>{callback_not()}

        this.styleCss=
        ".fundoLogin{display: flex;justify-content: center;align-items: center;width:100%;height:100vh;position: absolute;top: 0;left: 0;background-color: rgba(0,0,0,0.7);}"+
        ".base{display: flex;justify-content: center;align-items: stretch;width:50%;}"+
        ".elementosLogin{display: flex;justify-content: center;align-items: flex-start;width:40%;background-color: #eee;flex-direction: column;padding:15px;border-radius: 10px 0 0 10px;}"+
        ".logoLogin{display: flex;justify-content: center;align-items: center;width:40%;background-color: #bbb;padding:15px;border-radius: 0 10px 10px 0;}"+
        ".logoLogin img{width:100%;}"+
        ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;margin: 10px 0;width:100%;}"+
        ".campoLogin label{font-size: 18px;margin:5px;}"+
        ".campoLogin input{font-size: 18px;padding:5px;background-color: #fff;border-radius: 5px;width:100%;}"+
        ".botoesLogin{display: flex;justify-content: space-around;align-items: center; width:100%;}"+ //flex-wrap: wrap;
        `.botoesLogin button{cursor: pointer;background-color:#${this.config.cor};color:#fff;border-radius: 5px;padding: 10px;width: 50%;margin:10px 5px;}`

        const styleEstilo= document.createElement("style");
        styleEstilo.setAttribute("id","styleLogin");
        styleEstilo.setAttribute("rel","stylesheet");
        styleEstilo.setAttribute("type","text/css");
        styleEstilo.innerHTML=this.styleCss;

        document.head.appendChild(styleEstilo);

        const corpo = document.body;

        const fundoLogin = document.createElement("div");
        fundoLogin.setAttribute("id","fundoLogin");
        fundoLogin.setAttribute("class","fundoLogin");
        corpo.prepend(fundoLogin);

        const base = document.createElement("div");
        base.setAttribute("id","base");
        base.setAttribute("class","base");
        fundoLogin.appendChild(base);

        const elementosLogin = document.createElement("div");
        elementosLogin.setAttribute("id","elementosLogin");
        elementosLogin.setAttribute("class","elementosLogin");
        base.appendChild(elementosLogin);

        const campoLogin1 = document.createElement("div");
        campoLogin1.setAttribute("id","campoLogin1");
        campoLogin1.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLogin1);
        
        const labelUser = document.createElement("label");
        labelUser.innerText="Username";
        campoLogin1.appendChild(labelUser);
        
        const inputUserName = document.createElement("input");
        inputUserName.setAttribute("type","text");
        inputUserName.setAttribute("name","f_username");
        inputUserName.setAttribute("id","f_username");
        campoLogin1.appendChild(inputUserName);

        const campoLogin2 = document.createElement("div");
        campoLogin2.setAttribute("id","campoLogin2");
        campoLogin2.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLogin2);

        const labelSenha = document.createElement("label");
        labelSenha.innerText="Senha";
        campoLogin2.appendChild(labelSenha);

        const inputSenha = document.createElement("input");
        inputSenha.setAttribute("type","password");
        inputSenha.setAttribute("name","f_senha");
        inputSenha.setAttribute("id","f_senha");
        campoLogin2.appendChild(inputSenha);

        const botoesLogin = document.createElement("div");
        botoesLogin.setAttribute("id","botoesLogin");
        botoesLogin.setAttribute("class","botoesLogin");
        
        const btnLogin = document.createElement("button");
        btnLogin.setAttribute("id","btnLogin");
        btnLogin.innerText = "Login";
        btnLogin.addEventListener("click", (e)=>{
            this.verificaLogin();
                
        });

        const btnCancelar = document.createElement("button");
        btnCancelar.setAttribute("id","btnCancelar");
        btnCancelar.innerText = "Cancelar";
        btnCancelar.addEventListener("click", (e)=>{
            this.fechar();
        });

        botoesLogin.appendChild(btnLogin);
        botoesLogin.appendChild(btnCancelar);
        
        elementosLogin.appendChild(campoLogin1);
        elementosLogin.appendChild(campoLogin2);
        elementosLogin.appendChild(botoesLogin);
        
        const logoLogin=document.createElement("div")
        logoLogin.setAttribute("id","logoLogin");
        logoLogin.setAttribute("class","logoLogin");
        base.appendChild(logoLogin);

        const logo = document.createElement("img");
        logo.setAttribute("src",`${this.config.img}`);
        logo.setAttribute("title","logo");
        
        logoLogin.appendChild(logo);

    };

    static fechar = ()=>{
       const fundoLogin = document.querySelector("#fundoLogin");
       fundoLogin.remove();

       const styleLogin = document.querySelector("#styleLogin");
       styleLogin.remove();
    };

    static verificaLogin = ()=>{
        const mat = document.querySelector("#f_username").value;
        const pas = document.querySelector("#f_senha").value;     
        
        const endpoint = `${this.config.endpoint}/?matricula=${mat}&senha=${pas}`;
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
                
            if(res){
                console.log("res");
                sessionStorage.setItem("logado","true");
                sessionStorage.setItem("matlogado",mat);
                sessionStorage.setItem("nomelogado",res.nome);
                sessionStorage.setItem("acessologado",res.acesso);
                this.callback_ok();
                this.fechar();               
            }else{
                sessionStorage.setItem("logado","false");
                sessionStorage.setItem("matlogado","");
                sessionStorage.setItem("nomelogado","");
                sessionStorage.setItem("acessologado","");
                console.log("not");
                this.callback_not();
            };
        });
    };
};  