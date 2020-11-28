import React from 'react'

interface ILayOut {
    children: JSX.Element
}

export default (props: ILayOut) => {
    return (
        <div>
            <div>layout头部信息</div>
            {
                props.children
            }
            <div>layout底部消息</div>
        </div>
    )
}