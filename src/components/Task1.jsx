import React, { useState } from 'react';

function Task({ tarea, onToggleCompleted }) {
    const taskHeaderStyles = { color: "#009688", fontSize: "1.5rem" };

    return (
        <div className="box">
            <div className="columns is-vcentered">
                <div className="column is-narrow">
                    <input 
                        type="checkbox" 
                        className="checkbox" 
                        checked={tarea.completada}
                        onChange={onToggleCompleted}
                    />
                </div>
                <div className="column">
                    <p style={{ textDecoration: tarea.completada ? 'line-through' : 'none', ...taskHeaderStyles }}>
                        <strong>{tarea.titulo} </strong>
                        <small>Fecha limite: {tarea.fecha}</small>
                    </p>
                    <p style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>{tarea.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

function TaskList() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [tareas, setTareas] = useState([]);

    const agregarTarea = () => {
        setTareas([...tareas, { titulo, descripcion, fecha, completada: false }]);
        setTitulo('');
        setDescripcion('');
        setFecha('');
    };

    const toggleTareaCompletada = index => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].completada = !nuevasTareas[index].completada;
        setTareas(nuevasTareas);
    };

    return (
        <div className="section container">
            <h1 className="title">Lista de Tareas</h1>
            <div className="columns is-centered">
                <div className="column is-half">
                    <div className="box" style={{ backgroundColor: '#333', color: '#fff' }}>
                        <input 
                            className="input is-primary input-spacing"
                            type="text" 
                            placeholder="Título de la tarea"
                            value={titulo} 
                            onChange={(e) => setTitulo(e.target.value)} 
                            style={{ backgroundColor: '#212121', color: '#fff'}}
                        />
                        <input 
                            className="input is-primary input-spacing"
                            type="text" 
                            placeholder="Descripción de la tarea"
                            value={descripcion} 
                            onChange={(e) => setDescripcion(e.target.value)}
                            style={{ backgroundColor: '#212121', color: '#fff' }} 
                        />
                        <input 
                            className="input is-primary input-spacing"
                            type="date" 
                            value={fecha} 
                            onChange={(e) => setFecha(e.target.value)}
                            style={{ backgroundColor: '#212121', color: '#fff' }} 
                        />
                        <button className="button is-primary is-dark" onClick={agregarTarea}>Agendar</button>
                    </div>
                </div>
            </div>
            {tareas.map((tarea, index) => (
                <Task key={index} tarea={tarea} onToggleCompleted={() => toggleTareaCompletada(index)} />
            ))}
        </div>
    );
}

export { TaskList };
export { Task };