import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css'


export type AffairPriorityType = 'low' | 'middle' | 'high'

export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs
    if (filter === 'low') return affairs.filter(t => t.priority === 'low')
    if (filter === 'middle') return affairs.filter(t => t.priority === 'middle')
    if (filter === 'high') return affairs.filter(t => t.priority === 'high')
    else return affairs
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(t => t._id != _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div className={s.someClass}> Homework 2

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}

        </div>
    )
}

export default HW2
