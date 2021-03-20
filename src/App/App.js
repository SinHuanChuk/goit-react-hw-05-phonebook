import React, { Component } from 'react'
import List from '../List/List'
import Create from '../Create/Create'
import Search from '../Search/Search'
import Notification from '../Notification/Notification'
import animationSearch from '../Animation/AnimationSearch.module.css'
import animationNotification from '../Animation/AnimationNotification.module.css'
import styles from './App.module.css'
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group'

export default class App extends Component {
  state = {
    name: '',
    phone: '',
    filtredName: '',
    visibleAlert: false,
    filtred: [{
      id: uuidv4(),
      name: 'marry',
      phone: '123'
    },
    {
      id: uuidv4(),
      name: 'genry',
      phone: '152'
    },
    {
      id: uuidv4(),
      name: 'wandy',
      phone: '161'
    },
    {
      id: uuidv4(),
      name: 'rendy',
      phone: '616'
    }]
  }

  getName = (value) => {
    this.setState({
      name: value
    })
  }

  getPhone = (value) => {
    this.setState({
      phone: value
    })
  }

  getFilterName = (value) => {
    this.setState({
      filtredName: value
    })
  }

  getSubmitted = () => {
    const { filtred, name, phone } = this.state

     if(filtred.some(el => el.name === name || el.phone === phone)) {
       this.setState({
         visibleAlert: true
       })

       setTimeout(() => {
         this.setState({
           visibleAlert: false
         })
       }, 1000)
     } else {
      this.setState((prevState) => ({
        filtred: [...prevState.filtred, {id: uuidv4(), name: name, phone: phone}],
        name: '',
        phone: ''
      }))
     }
  }

  getDeletedElement = (value) => {
    const { filtred } = this.state

    filtred.map((el, index, arr) => {
      if(el.id === value) {
        return arr.splice(index, 1)
      }
    })

    this.setState((prevState) => ({
      filtred: [...prevState.filtred]
    }))

  }

  render() {
    const { name, phone, filtred, filtredName, visibleAlert } = this.state
    
    return (
      <div className = {styles.container}>
        <div className = {styles.wrapper}>
          <CSSTransition
          in = {visibleAlert}
          timeout = {300}
          unmountOnExit
          classNames = {animationNotification}>
            <Notification/>
          </CSSTransition>
          <Create getName = {this.getName} getPhone = {this.getPhone} getSubmitted = {this.getSubmitted} name = {name} phone = {phone}/>
          <CSSTransition 
          in = {filtred.length > 1}
          timeout = {300}
          classNames = {animationSearch}
          unmountOnExit>
            <Search getFilterName = {this.getFilterName}/>
          </CSSTransition>
          <List filtred = {filtred} filtredName = {filtredName} getDeletedElement = {this.getDeletedElement}/>
        </div>
      </div>
    )
  }
}
