import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import animationListItem from '../Animation/AnimationListItem.module.css'
import styles from './List.module.css'
import Item from '../Item/Item'

export default class List extends Component {
    render() {
        const { filtred, filtredName, getDeletedElement} = this.props

        const need = filtred.filter(el => el.name.toLowerCase().includes(filtredName))

        return (
            <TransitionGroup component = {'ul'} className = {styles.list}>
                {filtred.length > 0 && need.map(el => (
                    <CSSTransition 
                    timeout = {250}
                    key = {el.id}
                    classNames = {animationListItem}>
                        <Item getDeletedElement = {getDeletedElement} name = {el.name} phone = {el.phone} id = {el.id}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        )
    }
}
