'use client';
import styles from './blade.module.css'

export default function Blade(props) {
    let selectedClass = props.selectedBlade === props.index ? 'selected' : '';

    return (
        <div onClick={() => {props.setSelectedBlade(props.index)}} className={[styles.blade, selectedClass].join(' ')}>
            {props.title} 
        </div>
    )
}
