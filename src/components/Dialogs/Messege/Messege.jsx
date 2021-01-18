import s from './../Dialogs.module.css'

const Messege = (props) => {
    return (
        <div>
            <div className={s.dialog}>{props.message}</div>
        </div>
    )
}

export default Messege