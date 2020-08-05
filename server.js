const express=require('express')
let app=express()

app.use(express.static(__dirname+ '/public'));

// function to return deposit based on name
let returDeposit=function(clientName){
    let accounts = [
        {"id":30, "name":"John","deposit":5 },
        {"id":20, "name":"alex","deposit":50 },
        {"id":50, "name":"mercer","deposit":500 }
    ]

    let found=-1;
    for(let i=0;i<accounts.length;i++){
        if(accounts[i].name==clientName){
            found=i;
            return res=accounts[i].deposit;
        }
    }
   
}

let addition=function(num1,num2){
    let result=num1+num2;
    return result; 
}

//end point for adding two numbers
app.get('/adder',function(request,response){
    let num1=parseInt(request.query.num1);
    let num2=parseInt(request.query.num2);
    let result=addition(num1,num2);
    response.send('Result='+result);

})

// end point for retrieving deposit values of array based on name
app.get('/accounts',function(request,response){
    let name=(request.query.name);
    let deposit=returDeposit(name);
    response.send('Given name:'+name + ' Deposit:'+deposit);

})


// Start the server on port 3000
app.listen(3000)