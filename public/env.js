// Function to retrieve the value from dropdown
$(document).ready(function(){
    $('#getDepositBtn').click(function(){
        var id = $('#selectId').val()
        console.log("Sending id")
        var id={
            id:id
        }
         // jquery get function to consume the service from same server
        $.get( '/accounts', id, function( data ) {
            console.log("message came:"+id)
            $('#result').val(data)
          });
        // // jquery get function to consume the service from different server
          // To use this comment the acccounts end point in server.js and use a browser extension like Moesif Cors to chnage the origin
        // $.get( 'http://localhost:4000/accounts', id, function( data ) {
        //     console.log("message came:"+id)
        //     $('#result').val(data)
        //   });
    })
})
