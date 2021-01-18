import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';
import s from './Dialogs.module.css'
import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControl/FormsControl';
import { maxLengthCreator, required } from '../../api/utils/validators/validators';


const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Messege key={m.id} message={m.message} />)

    let addNewMessage = (e) => {
        props.sendMessage(e.newMessageText);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const maxlength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxlength50]} component={Textarea} name='newMessageText' placeholder='enter you message' />
            </div>
            <div><button >addMes</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)
export default Dialogs