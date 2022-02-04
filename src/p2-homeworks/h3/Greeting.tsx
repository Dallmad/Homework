import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    setError: (a: string) => void
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setError}
) => {
    const inputClass = error ? s.error : ''
    const onFocus = () => {setError('')} //убираем ошибку при фокусе инпута

    return (
        <div>
            <div className={s.overal}>
                <SuperInputText
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onFocus={onFocus}
                />
                <SuperButton onClick={addUser}>Add</SuperButton>
                <span className={s.span}>Total users {totalUsers}</span>
            </div>
            <div>
                {error && <span className={s.text}>{error}</span>}
            </div>
        </div>
    )
}

export default Greeting
