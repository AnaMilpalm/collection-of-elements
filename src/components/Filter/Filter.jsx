import s from './Filter.module.css';
export default function Filter({ value, onFilter}) {
    return(
        <div>
            <p className={s.label}>Serch by name</p>
            <input type="text" value={value} onChange={(e) => onFilter(e.target.value)} />
        </div>
    )
}