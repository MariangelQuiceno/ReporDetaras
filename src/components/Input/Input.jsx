import React, { useRef, useState } from 'react';
import './inputCss.css';

const homeworkBurn = ['Tarea Ingles', 'Organizar Habitación', 'Organizar Cuarto'];

export const Input = () => {
    
  const inputReference = useRef('');

  const handleSetTask = () => {
    const newTask = inputReference.current.value;
    if (newTask.trim() !== '') { // Verifica que la nueva tarea no esté vacía
      setTasks(prevTasks => [...prevTasks, newTask]); // Agrega la nueva tarea al arreglo tasks
      inputReference.current.value = ''; // Limpia el input después de agregar la tarea
    }
  };

  const [tasks, setTasks] = useState(homeworkBurn);

  return (
    <div className='father-input'>
      <div className='addOn-homework-div'>
      <label>
        <div className='inputs-containers'>
        <input ref={inputReference} className='homework-input' placeholder='Ingrese el Titulo de la Tarea' type="text" />
        <textarea  className='homework-desc' placeholder='Ingrese la descripción de la tarea' type="text" />
        </div>
      </label>
      <div className='buttons'>
      <button onClick={handleSetTask}> Crear Tarea</button>
      <button onClick={handleSetTask}> Ver Todas las Tareas</button>
      <button onClick={handleSetTask}> Ver Tareas Archivadas</button>
      <button onClick={handleSetTask}> Ver Tareas Pendientes</button>
      </div>
      <hr />
      </div>

      <div className='lists-items-div'>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
