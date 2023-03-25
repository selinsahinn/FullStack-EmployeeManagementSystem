import React, { Component } from 'react'

export class FooterComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            
        }
    }


  render() {
    return (
      <div>
        <footer className='footer'>
            <span className='text-muted'>All Rights Reserved 2023 @Selin</span>
        </footer>
      </div>
    )
  }
}

export default FooterComponent
