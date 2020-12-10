import React, {Fragment} from "react"
import {Message} from "./Message"

export class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.props = props
    }
    isMineMessage(message){return this.props.user_id_mine === message.user_id}
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.messages.length !== this.props.messages.length){
            this.props.handleChangeMessages()
        }
    }
    render() {
        return (
            <Fragment>
                {this.props.messages.map((message, key) =>
                    <div className="message ml-0 mb-1" key={key}>
                        <Message message={message}
                                 getUser={this.props.getUser}
                                 user_id_mine={this.props.user_id_mine}/>
                    </div>
                )}
            </Fragment>
        )
    }
}
