const express=require('express')
let app=express()


// function to return deposit based on id
let returDeposit=function(id){
    let accounts = [
        {"id":30, "name":"John","deposit":5 },
        {"id":20, "name":"alex","deposit":50 },
        {"id":50, "name":"mercer","deposit":500 }
    ]

    let found=-1;
    for(let i=0;i<accounts.length;i++){
        if(accounts[i].id==id){
            found=i;
            return res=accounts[i].deposit;
        }
    }

}


// end point for retrieving deposit values of array based on id
app.get('/accounts',function(request,response){
    let id=(request.query.id);
    let deposit=returDeposit(id);
    response.send(""+deposit);

})

    

// Start the server on port 3000
app.listen(4000)