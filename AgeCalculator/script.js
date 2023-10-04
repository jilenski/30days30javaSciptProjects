const birthDate = document.getElementById('birthdate');
const calculateBtn = document.getElementById('calc-btn');
const text = document.getElementById('text');

birthDate.value = '1900-01-01';

function calculateAge() {
  let currentDate = new Date();
  let inputDate = new Date(birthDate.value);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const inputYear = inputDate.getFullYear();
  const inputMonth = inputDate.getMonth() + 1;
  const inputDay = inputDate.getDate();

  if (inputMonth > currentMonth && inputDay > currentDay) {
    calcYear = currentYear - 1 - inputYear;
    calcMonth = currentMonth + 11 - inputMonth;
    calcDay = currentDay + 30 - inputDay;
  } else if (inputMonth > currentMonth) {
    calcYear = currentYear - 1 - inputYear;
    calcMonth = currentMonth + 12 - inputMonth;
    calcDay = currentDay - inputDay;
  } else {
    calcYear = currentYear - inputYear;
    calcMonth = currentMonth - inputMonth;
    calcDay = currentDay - inputDay;
  }

  text.innerHTML = `You are <span>${calcYear}</span> years, <span>${calcMonth}</span> months and <span>${calcDay}</span> days old`;
}

calculateBtn.addEventListener('click', calculateAge);
