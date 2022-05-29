import React, { Component } from 'react'
import css from "./Button.module.css"

export default class Button extends Component {
  render() {
    return (
        <div className='wrap'><button className={css.Button} type='button' onClick={this.props.loadMore} > load more... </button></div>
    )
  }
}