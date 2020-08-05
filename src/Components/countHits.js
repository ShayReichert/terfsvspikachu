// import React, { Component } from 'react';

// const countHits = (WrappedComponent) => {

//     class NewComponent extends Component {
//         constructor(props) {
//             super(props)
//             this.state = {
//                 hits: 0
//             }
//         }


//         addOne = () => {
//             this.setState(prevState => {
//                 return {
//                     hits: prevState.hits + 1,
//                 }
//             })
//         }


//         componentDidUpdate = (prevProps, prevState) => {
//             if (this.state !== prevState) {
//                 const CompName = WrappedComponent.name;
//                 this.props.reduceHandler(CompName);
//             }
//         }

//         render() {

//             return <WrappedComponent
//                 hocState={this.state}
//                 addOneHit={this.addOne}
//                 {...this.props}
//             />
//         }
//     }

//     return NewComponent;

// }

// export default countHits;