var isOpen = false; // Initialize a variable to track the form's state

function openForm() {
  var form = document.getElementById("myForm");

  if (!isOpen) {
    form.style.display = "block"; // Show the form
    isOpen = true; // Update the form's state
  } else {
    form.style.display = "none"; // Hide the form
    isOpen = false; // Update the form's state
  }
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
