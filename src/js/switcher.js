
//       function toggleTheme() {
//         if (localStorage.getItem('theme') === 'theme-dark') {
//           setTheme('theme-light');
//         } else {
//           setTheme('theme-dark');
//         }
//       }
//       (function () {
//         if (localStorage.getItem('theme') === 'theme-dark') {
//           setTheme('theme-dark');
//           document.getElementById('slider').checked = false;
//         } else {
//           setTheme('theme-light');
//           document.getElementById('slider').checked = true;
//         }
//       })();
const input = document.querySelector(".switcher-toggle");

// Отслеживаем щелчок по кнопке
input.addEventListener("click", function toggleTheme() {
    // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
    document.body.classList.toggle("theme-dark");
    (function () {
        if (document.body.classList.toggle("theme-dark")) {
            document.getElementById('slider').checked = false;
        } else {
          
            document.getElementById('slider').checked = true;
        }
    
    });
})