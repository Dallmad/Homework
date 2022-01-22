import React from 'react'
import {MessageDataType} from "./HW1";
import s from './Message.module.css'

function Message(props: MessageDataType) {
    return (
        <div className={s.message}>
            <img src={props.avatar}/>
            <div className={s.textBackground}>{props.name}
                <div className={s.text_message}>{props.message} </div>
                <time className={s.time}>{props.time}</time>
            </div>
        </div>
    )
}

export default Message
