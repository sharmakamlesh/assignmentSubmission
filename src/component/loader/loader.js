import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import style from './loader.module.css'
export const Loader = () => {
    return (<div className={style.loaderContainer}>
                <CircularProgress />
            </div>
    )
}
