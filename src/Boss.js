import React, {Component} from 'react';
import  {CSSTransition} from "react-transition-group";

export default class Boss extends Component {
    constructor(props) {
        super(props);
        this.state={
            isShow:true
        }
    }
    toToggle(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render() {
        return (
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-style"
                    unmountOnExit
                >
                    <div>动画</div>
                </CSSTransition>

                <button onClick={this.toToggle.bind(this)}>控制动画</button>
            </div>
        )
    }

}
