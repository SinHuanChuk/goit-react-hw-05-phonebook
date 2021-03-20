import React, { Component } from 'react'
import styles from './Search.module.css'

export default class Search extends Component {
    getFilterName = ({target}) => {
        const { getFilterName } = this.props

        getFilterName(target.value)
    }

    render() {
        return (
            <div className = {styles.container}>
                <div className = {styles.wrapper}>
                    <p className = {styles.text}>find contact by name</p>
                    <input className = {styles.input} onChange = {this.getFilterName} type = 'text' placeholder = 'search contact' />
                </div>
            </div>
        )
    }
}
