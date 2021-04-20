import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div>
                <span>
                    <img src="https://avatars.githubusercontent.com/u/60017194?v=4" width="80px" height="80px" style={{borderRadius:"10px"}}/>
                </span>
                    <div>Name goes here..</div>
                    <div>Company goes here..</div>
            </div>
        )
    }
}

export default Card
