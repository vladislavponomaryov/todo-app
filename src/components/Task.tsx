import React, { useState } from 'react';
import { Task as TaskType } from '../App';

interface TaskProps {
    task: TaskType;
    toggleTaskCompletion: (id: number) => void;
    deleteTask: (id: number) => void;
    editTask: (id: number, newText: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editTask(task.id, newText);
        setIsEditing(false);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span>{task.text}</span>
            )}
            {isEditing ? (
                <button onClick={handleSave}>Сохранить</button>
            ) : (
                <button onClick={handleEdit}>Изменить</button>
            )}
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
        </div>
    );
};

export default Task;
