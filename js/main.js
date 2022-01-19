function show() {
      
  var name = document.getElementById("name").value;
  var email= document.getElementById("email").value;
  var phone= document.getElementById("phone").value;
  var message= document.getElementById("message").value;


   firebase.database().ref('User/' + name).set({
          name : name,
          email : email,
          phone : phone,
          message: message
        }, function(error) {
          if (error) {
            // The write failed...
          } else {
              alert("DONE");
            
         
          }
        });
}



function search() 
{
    var name= document.getElementById("name1").value;

firebase.database().ref('User/'+ name).once('value').then(function(snapshot) {
                if (snapshot.exists()) {
                     var name_ = snapshot.val().name;
                     var email_ = snapshot.val().email;
                    var phone_ = snapshot.val().phone;
                    var message_ = snapshot.val().message;
                      document.getElementById("name").value = name_;
                      document.getElementById("email").value = email_;
                      document.getElementById("phone").value =  phone_;
                      document.getElementById("message").value =  message_;
                }
                else
                {

                }
        }, function(error) {
            if (error) {

            } else {
              alert("DONE");
            }
          });
        }

       
      
     
      
      