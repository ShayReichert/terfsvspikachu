import React, { Component } from 'react'
import ReactDOM from 'react-dom';

 class Modal extends Component {

    render(props) {
        return ReactDOM.createPortal(
            <div onClick={this.props.close} className="modal">
                <div>
                    <h4>Keep informed of<br />  <span>JK Rowling's latest transphobic tweets</span><br /> whith Pikachu !</h4>
                    <h5>('cause otherwise, it hurts too much)</h5>
                    <br />
                    <h3>Click <span>Anywhere</span> to <span>start</span></h3>
                </div>
            </div>,
            document.getElementById('second-root')
        )
    }
}

export default Modal;