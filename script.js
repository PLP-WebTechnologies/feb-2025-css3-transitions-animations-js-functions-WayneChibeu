// Function to save theme to localStorage
function saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }
  
  // Function to load and apply saved theme
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add('light'); // Default theme
    }
  }
  
  // Toggle theme and save preference
  document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  
    const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    saveTheme(newTheme);
  
    // Optional: Add a temporary animation or effect
    document.getElementById('toggleTheme').classList.add('clicked');
    setTimeout(() => {
      document.getElementById('toggleTheme').classList.remove('clicked');
    }, 300);
  });
  
  loadTheme();
  