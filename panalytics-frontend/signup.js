
console.log("testing signin");
let signin = document.getElementById('btnLogin2');
signin.addEventListener("click", function(){
   console.log('clicked!');

   let s1=document.getElementById("email");
   let s2=document.getElementById("pwd2");
   

   console.log(s1,s2);
   
    let data = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("pwd2").value
    }

    console.log();
    console.log(data);
    data = JSON.stringify(data);
    const url = 'http://localhost:8000/auth/signin';
    // The data we are going to send in our request
  
    // The parameters we are gonna pass to the fetch function
    let fetchData = { 
        method: 'POST', 
        body: data,
         headers: {'Content-Type': 'application/json'}
    }
    fetch(url, fetchData)
    .then(response=>response.json())
    .then(res=>{
        console.log(res)
        localStorage.setItem('token', res.token);
        localStorage.setItem('user_id', res.user_id);
        localStorage.getItem('user_id', res.user_id);

    }
    );
    
    
        
}
)



  

console.log("testing");
let signup = document.getElementById('btnLogin');
signup.addEventListener("click", function(){
   console.log('clicked!');

   let e1=document.getElementById("name1");
   let e2=document.getElementById("uname1");
   let e3=document.getElementById("pwd1");

   console.log(e1,e2,e3);
   
    let data = {
        "name": document.getElementById("name1").value,
        "email": document.getElementById("uname1").value,
        "password": document.getElementById("pwd1").value
    }

    console.log();
    console.log(data);
    data = JSON.stringify(data);
    const url = 'http://localhost:8000/auth/signup';
    // The data we are going to send in our request
  
    // The parameters we are gonna pass to the fetch function
    let fetchData = { 
        method: 'PUT', 
        body: data,
         headers: {'Content-Type': 'application/json'}
    }
    fetch(url, fetchData)
    .then(function(res) {
        console.log(res);
    }); 
        
}
)
