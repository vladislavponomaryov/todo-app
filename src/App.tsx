import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import './App.css';

export interface Task {
    id: number;
    text: string;
    completed: boolean;
    createdAt: Date;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks).map((task: Task) => ({ ...task, createdAt: new Date(task.createdAt) })) : [];
    });
    const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');



    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (text: string) => {
        if (text.trim() === '') return;
        setTasks(prev => [...prev, { id: Date.now(), text, completed: false, createdAt: new Date() }]);
    };

    const toggleTaskCompletion = (id: number) => {
        setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const deleteTask = (id: number) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    const editTask = (id: number, newText: string) => {
        setTasks(prev => prev.map(task => task.id === id ? { ...task, text: newText } : task));
    };

    const updateFilter = (newFilter: 'all' | 'completed' | 'pending') => {
        setFilter(newFilter);
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

    const sortedTasks = [...filteredTasks].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return (
        <div className="app">
            <TaskFilter filter={filter} updateFilter={updateFilter} />
            <TaskInput addTask={addTask} />
            <TaskList tasks={sortedTasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} editTask={editTask} />
        </div>
    );
};

export default App;
