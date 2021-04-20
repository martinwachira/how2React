import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <input type="text" name="profile" placeholder="github account" />
                <button>Add new</button>
            </div>
        )
    }
}

export default Form;