import React from 'react'
import { useDispatch, useSelector } from 'umi'

export default (props: any) => {
    const dispatch = useDispatch()
    const count = useSelector((state: any) => state.global.count)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: 'global/add' })}>+</button>
            <button onClick={() => dispatch({ type: 'global/jian' })}>-</button>
        </div>
    )
}
