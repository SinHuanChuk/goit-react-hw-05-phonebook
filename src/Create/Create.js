import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import animationCaption from '../Animation/AnimationCaption.module.css'
import styles from './Create.module.css'

export default class Create extends Component {

    getName = ({target}) => {
       const { getName } = this.props

       getName(target.value)
    }

    getPhone = ({target}) => {
        const { getPhone } = this.props

       getPhone(target.value)
    }

    getSubmitted = (e) => {
        e.preventDefault()

        this.props.getSubmitted()
    }

    render() {
        const { name, phone } = this.props

        return (
            <div className = {styles.wrapper}>
                <CSSTransition
                in = {true}
                appear = {true}
                timeout = {250}
                classNames = {animationCaption}
                unmountOnExit>
                    <h1 className = {styles.caption}>Phonebook</h1>
                </CSSTransition>
                <form onSubmit = {this.getSubmitted} className = {styles.forma}>
                    <p className = {styles.text}>Name</p>
                    <input required className = {styles.input} onChange = {this.getName} type = 'text' placeholder = 'name' value = {name}/>
                    <p className = {styles.text}>Phone number</p>
                    <input required className = {styles.input} onChange = {this.getPhone} max = {9999999999} type = "number" placeholder = 'phone' value = {phone}/>
                    <button className = {styles.button} type = 'submit'>Add contact</button>
                </form>
            </div>
        )
    }
}
