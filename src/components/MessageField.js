import React, {Component} from "react"
import {Message} from "./Message"

export class MessageField extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.messages.length !== this.props.messages.length) {
            this.props.handleChangeMessages()
        }
    }

    render() {
        return (
            <div className="form-control form-group bg-white messages-field border-primary overflow-auto">
                {this.props.messages.map((message, key) => {
                        if (message.chat_id === this.props.chat_id) return (
                            <div className="message ml-0 mb-1" key={key}>
                                <Message message={message}
                                         getUser={this.props.getUser}
                                         user_id_mine={this.props.user_id_mine}/>
                            </div>)
                    }
                )}
            </div>
        )
    }
}
