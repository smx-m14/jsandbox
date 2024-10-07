function runCode() {
    const code = document.getElementById('code').value;
    const result = document.getElementById('result');
  
    try {
      result.textContent = '';
      new Function(code)(); // Evaluar el código en un nuevo contexto
    } catch (error) {
      result.textContent = 'Error: ' + error.message;
    }
  }

  function saveCode() {
    const code = editor.getValue();
    const encodedCode = btoa(code);
    localStorage.setItem('code', encodedCode);
  }
  
  function loadCode() {
    const encodedCode = localStorage.getItem('code');
    if (encodedCode) {
      const code = atob(encodedCode);
      editor.setValue(code);
    }
  }