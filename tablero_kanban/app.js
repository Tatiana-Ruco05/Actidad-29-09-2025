let tareaArrastrada = null;

function actualizarTareas() {
  const tareas = document.querySelectorAll('.tarea');
  tareas.forEach(tarea => {
    tarea.addEventListener('dragstart', (e) => {
      tareaArrastrada = tarea;
      setTimeout(() => {
        tarea.style.display = 'none';
      }, 0);
    });

    tarea.addEventListener('dragend', () => {
      setTimeout(() => {
        tarea.style.display = 'block';
        tareaArrastrada = null;
      }, 0);
    });
  });
}

actualizarTareas();

const columnas = document.querySelectorAll('.columna');

columnas.forEach(columna => {
  columna.addEventListener('dragover', (e) => {
    e.preventDefault();
    columna.style.background = '#d1dfe6ff';
  });

  columna.addEventListener('dragenter', (e) => {
    e.preventDefault();
  });

  columna.addEventListener('dragleave', () => {
    columna.style.background = '#a1cedaff';
  });

  columna.addEventListener('drop', (e) => {
    e.preventDefault();
    columna.style.background = '#a1cedaff';
    if (tareaArrastrada) {
      columna.appendChild(tareaArrastrada);
      actualizarTareas();
    }
  });
});

// se toma referencia del ejercicio visto en la guia para desarrollar el ejercicio pedido
