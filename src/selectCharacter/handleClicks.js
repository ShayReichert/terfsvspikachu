import React, { Component } from 'react';

const handleClicks = (WrappedComponent) => {

    class handleClicks extends Component {

        state = {
            bg: ""
        }


        handleClick = () => {
            if (WrappedComponent.name === "JkRowlingPresent") {
                this.setState({
                    bg: 'bg-danger'
                })
            } else {
                this.setState({
                    bg: 'bg-success'
                })
            }
        }


        render() {

            if (this.state.bg === 'bg-danger') {
                throw new Error();
            }

            return <WrappedComponent hocState={this.state} handleClick={this.handleClick} {...this.props} />
        }
    }
    return handleClicks;

}

export default handleClicks;