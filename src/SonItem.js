import React, {Component,Fragment} from 'react';
import ProTypes from 'prop-types'
class SonItem extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.content!==this.props.content){
            return true
        }else{
            return false
        }
    }

    render() {
        return (
            <Fragment>
                <li onClick={()=>this.HandleList()}>{this.props.test}{this.props.content}</li>
            </Fragment>
        )
    }
    HandleList(){
        this.props.deleteItem(this.props.index)
    }
}
SonItem.prototypes={
    content:ProTypes.string.isRequired,
    index:ProTypes.number,
    deleteItem:ProTypes.func
}
SonItem.defaultProps={
    index:'0',
    test:'啪啪啪'
}
export default SonItem;
