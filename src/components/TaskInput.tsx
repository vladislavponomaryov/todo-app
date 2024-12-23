import React, { useState } from 'react';

interface TaskInputProps {
    addTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTask(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className='task-input'>
            <input
                type="text"
                placeholder="Добавить новую задачу"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default TaskInput;
