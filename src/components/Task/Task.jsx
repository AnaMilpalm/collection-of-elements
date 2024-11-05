import s from './Task.module.css';

const Task = ({data: {id, text}, onDelete } ) => {
    return (
        <div className={s.container}>
            <p className={s.text}>{text}</p>
            <button className={s.btn} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Task;