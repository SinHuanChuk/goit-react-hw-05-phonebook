import React, { Component } from 'react'
import styles from './Item.module.css'
import removeIcon from '../Images/removeIcon.png'

export default class Item extends Component {

    getDeletedElement = (e) => {
        const { getDeletedElement } = this.props

        getDeletedElement(e.target.closest('li').id)
    }

    render() {
        const {name, phone, id} = this.props

        return (
            <li key = {id} id = {id} className = {styles.listItem}>
                    <p className = {styles.text}>{name}</p>
                    <p className = {styles.text}>{phone}</p>
                    <button className = {styles.button} onClick = {this.getDeletedElement}><img className = {styles.image} src = {removeIcon}/></button>
            </li>
        )
    }
}
