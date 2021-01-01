import React, {Component} from "react";
import {auth, db, logOut} from "../../../services/firebase";
import {Loader} from "../../Loader";

class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            chats: [],
            content: "",
            readError: null,
            writeError: null,
        };
    }

    componentWillUnmount() {
        db.ref('chats').off();
    }

    componentDidMount() {
        this.setState({readError: null});
        try {
            db.ref("chats").on("value", (snapshot) => {
                let chats = [];
                snapshot.forEach((snap) => {
                    chats.push(snap.val());
                });
                this.setState({chats});
            });
        } catch (error) {
            this.setState({readError: error.message});
        }
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value,
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({writeError: null});
        try {
            await db.ref("chats").push({
                content: this.state.content,
                timestamp: Date.now(),
                uid: this.state.user.uid,
            });
            // ??
            this.setState({content: ""});
        } catch (error) {
            this.setState({writeError: error.message});
        }
    }
    getEmail = () => {
        const user = auth().currentUser;
        return user && user.email;
    }

    // async logout(event) {
    //     event.preventDefault();
    //     try {
    //         await logOut();
    //     } catch (error) {
    //         this.setState({ error: error.message });
    //     }
    // }

    render() {
        return (
            <div>
                <div className="chats">
                    {/*<Loader condition={this.state.chats}>*/}
                        {this.state.chats.map((chat) => {
                            return <p key={chat.timestamp}>{chat.content}</p>
                        })}
                    {/*</Loader>*/}
                </div>

                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.content}/>
                    {this.state.error ? <p>{this.state.writeError}</p> : null}
                    <button type="submit">Send</button>
                </form>
                <div>
                    Login in as:
                    <Loader condition={this.getEmail()}>
                        <strong>{this.getEmail()}</strong>
                    </Loader>
                </div>
            </div>
        );
    }
}

export default Messenger