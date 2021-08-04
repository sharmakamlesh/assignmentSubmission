import style from './input.module.css'

export const Input = (props) => {
    return<input type='text' onChange={props.onChange} className={style.input}/>
}