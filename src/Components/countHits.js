import React, { Component } from 'react';

const CountHits = (WrappedComponent) => {

    class CountHits extends Component {

        state = {
            hits: 0
        }

        addOne = () => {
            this.setState(prevState => {
                return {
                    hits: prevState.hits + 1,
                }
            })
        }


        componentDidUpdate(prevProps, prevState) {
            if(this.state !== prevState) {
                const CompName = WrappedComponent.name;
                this.props.reduceHandler(CompName);
            }
        }

        render() {

            return <WrappedComponent hocState={this.state} addOneHit={this.addOne} {...this.props} />
        }
    }
    
    return CountHits;

}

export default CountHits;