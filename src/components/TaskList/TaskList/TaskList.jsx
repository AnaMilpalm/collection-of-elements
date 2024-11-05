import Task from '../../Task/Task';
import s from './TaskList.module.css';
export default function TaskList ({tasks}) {
    return (
        <ul className={s.list}>
            {tasks.map((task) => (
                <li className={s.item} key={task.id}>
                    <Task text={task.text} />
                </li>
            ))}
        </ul>
    )
}