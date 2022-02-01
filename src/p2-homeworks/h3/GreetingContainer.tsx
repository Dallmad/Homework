import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        //setError('') / в фокус закинул
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        if (name.trim() !== '') {
            setName(name)
            alert(`Hello ${name} !`)
            setName('')
            addUserCallback(name)
        } else {
            setError('Title is required')
            setName('')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            setError={setError}
        />
    )
}

export default GreetingContainer
