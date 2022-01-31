import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (deleteAffairCallback: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.affairs}>
            <div className={props.affair.priority === 'high' ? s.high :
                    props.affair.priority === 'middle' ? s.middle :
                        props.affair.priority === 'low' ? s.low :''}>
                <button className={s.buttonDelete}
                        onClick={deleteCallback}>X
                </button>
                {props.affair.name}
            </div>
        </div>
    )
}

export default Affair