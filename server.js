            const express=require('express')
            let app=express()

            app.use(express.static(__dirname+ '/public'));

            // function to return deposit based on name
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
                let id=(request.query.id);
                let deposit=returDeposit(id);
                response.send('Given Id:'+id + ' Deposit:'+deposit);

            })

            // HD task homework
            // end point to for retreiving deposit based on given id from the linked list.
            app.get('/accountFromLL',function(request,response){
                ll.printListData();
                let id=parseInt(request.query.id);
                let deposit= extractDeposit(ll,id);
                response.send('Given Id: '+id + ' Deposit: '+deposit);
            })

            
            // Construct Single Node
            class Node {
                constructor(data, next = null) {
                this.data = data;
                this.next = next;
                }
            }
            
            // Create Nodes in Linked List
            class LinkedList {
                constructor() {
                this.head = null;
                this.size = 0;
                }
            
                // Insert first node
                insertFirst(data) {
                this.head = new Node(data, this.head);
                this.size++;
                }
            
                // Print list data
                printListData() {
                let current = this.head;
            
                while (current) {
                    console.log(current.data);
                    current = current.next;
                }
                }

            // function clears the linked list
            clearList() {
                this.head = null;
                this.size = 0;
            }


            }
            // Function to extract deposit from given id
            function extractDeposit(ll,id) {
                console.log(id);
                let current = ll.head;
            
                while (current) {
                //console.log(current.data);
                if(current.data['id']===id){
                    let res = current.data['deposit'];
                    return res;
                }
                current = current.next;
                }
            }

            const ll = new LinkedList();
            //inserting data to linked list.
            ll.insertFirst({"id":30, "name":"John","deposit":5 });
            ll.insertFirst({"id":20, "name":"alex","deposit":50} );
            ll.insertFirst({"id":50, "name":"mercer","deposit":500});

        // console.log('Deposit is '+res);
        //ll.clearList();
        
        // Start the server on port 3000
            app.listen(3000)