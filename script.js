const worksOfArt = [
    "Изворът на Белоногага - Петко Славейков",
    "Майце си - Христо Ботев",
    "Моята молитва - Христо Ботев",
    "Хаджи Димитър - Христо Ботев",
    "Обесването на Васил Левски - Христо Ботев",
    "Странник - Христо Ботев",
    "Левски - Иван Вазов",
    "Из „Под игото“ - Иван Вазов",
    "главите „Гост“ - Иван Вазов",
    "„Новата молитва на Марка“ - Иван Вазов",
    "„Пиянство на един народ“ - Иван Вазов"

    
    // Добавете още произведения по ваш избор
  ];
  
  const possibleDates = []; // Списък с възможни дати
  
  function generateWorkOfArt() {
    const randomIndex = Math.floor(Math.random() * worksOfArt.length);
    return worksOfArt[randomIndex];
  }
  
  function generateRandomDate(startDate, endDate) {
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
  
    if (possibleDates.length === 0) {
      for (let time = startTime; time <= endTime; time += 24 * 60 * 60 * 1000) {
        possibleDates.push(new Date(time).toISOString());
      }
    }
  
    const randomIndex = Math.floor(Math.random() * possibleDates.length);
    const randomDateString = possibleDates[randomIndex];
    const randomDate = new Date(randomDateString);
  
    // Премахваме използваната дата от списъка с възможни дати
    possibleDates.splice(randomIndex, 1);
  
    return randomDate;
  }
  
  function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  
  document.getElementById('generateButton').addEventListener('click', function(event) {
    event.preventDefault();
  
    const startDateInput = new Date('2023-11-29'); // Задайте начална дата
    const endDateInput = new Date('2023-12-11'); // Задайте крайна дата
  
    const resultElement = document.getElementById('resultList');
    const generatedWork = generateWorkOfArt();
    const randomDate = generateRandomDate(startDateInput, endDateInput);
  
    // Създаваме нов елемент за списъка и го добавяме в него
    const listItem = document.createElement('li');
    listItem.textContent = `Дата: ${formatDate(randomDate)}, Произведение: ${generatedWork}`;
    resultElement.appendChild(listItem);
  });
  