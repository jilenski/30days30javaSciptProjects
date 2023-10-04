const calculateBtn = document.getElementById('calc-btn');
const text = document.getElementById('text');
let dateInput = document.getElementById('birthdate');
dateInput.max = new Date().toISOString().split('T')[0];

function calculateAge() {
  const birthDate = dateInput.value;
  const currentDate = new Date();
  const inputDate = new Date(birthDate);

  years = currentDate.getFullYear() - inputDate.getFullYear();
  months = currentDate.getMonth() - inputDate.getMonth();
  days = currentDate.getDate() - inputDate.getDate();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    const lastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      0
    );
    days += lastMonth.getDate();
  }

  text.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days old`;
}

calculateBtn.addEventListener('click', calculateAge);
