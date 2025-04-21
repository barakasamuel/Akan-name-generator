document.getElementById('akanForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const genderInput = document.querySelector('input[name="gender"]:checked');
  
    const resultDiv = document.getElementById('result');
  
    
    if (!genderInput) {
      resultDiv.textContent = "Please select your gender.";
      return;
    }
  
    const gender = genderInput.value;
  
    
    const date = new Date(year, month - 1, day);
    if (
      date.getDate() !== day ||
      date.getMonth() !== month - 1 ||
      date.getFullYear() !== year
    ) {
      resultDiv.textContent = "Invalid date. Please check your input.";
      return;
    }
  
    const dayIndex = date.getDay();
  
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];
    const dayName = daysOfWeek[dayIndex];
  
    resultDiv.textContent = `You were born on a ${dayName}. Your Akan name is ${akanName}.`;
  });
  
