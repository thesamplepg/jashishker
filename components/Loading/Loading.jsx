import React from 'react'
import s from './page.module.scss'
const Loading = () => {
    return (
        <div className={s.Block2} >
            <span className={s.loader} >
                <span className={s.loadersd} ></span>
            </span>
        </div>
    )
}

export default Loading