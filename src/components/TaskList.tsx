import React from 'react';
import Task from './Task';
import { Task as TaskType } from '../App';

interface TaskListProps {
    tasks: TaskType[];
    toggleTaskCompletion: (id: number) => void;
    deleteTask: (id: number) => void;
    editTask: (id: number, newText: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion, deleteTask, editTask }) => {
    return (
        <div className='task-list'>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            ))}
        </div>
    );
};

export default TaskList;
