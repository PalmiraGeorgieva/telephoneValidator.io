const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
function validatePhoneNumber(userInput) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  return regex.test(userInput)
}


checkBtn.addEventListener('click', () => {
  const phoneNumber = userInput.value.trim()
  const isValid = validatePhoneNumber(phoneNumber)

  if(phoneNumber === '') {
    alert(`Please provide a phone number`);
    return;
  }

  if(isValid) {
    resultsDiv.textContent = `Valid US number: ${phoneNumber}`;

  } else {
    resultsDiv.textContent = `Invalid US number: ${phoneNumber}`

  }



})

clearBtn.addEventListener('click', () => {
userInput.value = '';
resultsDiv.textContent = '';
})