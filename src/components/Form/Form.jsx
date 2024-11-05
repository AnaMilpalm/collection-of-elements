import s from './Form.module.css';
export default function Form ({onAdd}) {
    const handleSubmit = e => {
        e.preventDefault();
        onAdd({
            id: Date.now(),
            text: e.target.elements.text.value
        })
        e.target.reset();
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <input type="text" className={s.field} name="text" />
            <button className={s.button} type="submit">Add task</button>
        </form>
    );
};
