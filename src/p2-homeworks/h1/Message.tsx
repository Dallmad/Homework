import React from 'react'
import s from './Message.module.css'

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: MessageDataType) {
    return (
        <div className={s.chat}>
            <img src={props.avatar}/>
            <div className={s.message}
            >{props.name}
                <div className={s.text_message}
                >{props.message} </div>
                <time className={s.time}
                >{props.time}</time>
            </div>
        </div>
    )
}

export default Message
