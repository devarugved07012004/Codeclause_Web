document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;
    var rating = document.getElementById("rating").value;
  
    // Process form data (you can customize this part)
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Email: " + email);
    console.log("Feedback: " + feedback);
    console.log("Rating: " + rating);
  
    // Reset the form
    document.getElementById("surveyForm").reset();
  });
  