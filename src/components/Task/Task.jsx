import s from './Task.module.css';

const Task = ({text}) => {
    return <span className={s.item}>{text}</span>
}

export default Task;