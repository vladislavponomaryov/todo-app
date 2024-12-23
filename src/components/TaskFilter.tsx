import React from 'react';

interface TaskFilterProps {
    filter: 'all' | 'completed' | 'pending';
    updateFilter: (filter: 'all' | 'completed' | 'pending') => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, updateFilter }) => {
    return (
        <div className='task-filter'>
            <button onClick={() => updateFilter('all')} disabled={filter === 'all'}>Все задачи</button>
            <button onClick={() => updateFilter('completed')} disabled={filter === 'completed'}>Выполненные</button>
            <button onClick={() => updateFilter('pending')} disabled={filter === 'pending'}>Не выполненные</button>
        </div>
    );
};

export default TaskFilter;
