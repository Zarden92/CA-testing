function validateForm() {
    let isValid = true;
  
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
  
    const nameError = document.getElementById('nameError');
    const subjectError = document.getElementById('subjectError');
    const emailError = document.getElementById('emailError');
    const addressError = document.getElementById('addressError');
  
    nameError.innerHTML = '';
    subjectError.innerHTML = '';
    emailError.innerHTML = '';
    addressError.innerHTML = '';
  
    if (!name) {
      nameError.innerHTML = 'Name is required';
      isValid = false;
    }
    if (!subject) {
      subjectError.innerHTML = 'Subject is required';
      isValid = false;
    } else if (subject.length < 10);}