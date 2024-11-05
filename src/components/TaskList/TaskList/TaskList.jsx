import Task from '../../Task/Task';
import s from './TaskList.module.css';
export default function TaskList ({tasks, onDelete}) {
    return (
        <ul className={s.list}>
            {tasks.map((task) => (
                <li className={s.item} key={task.id}>
                    <Task data={task} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    )
}