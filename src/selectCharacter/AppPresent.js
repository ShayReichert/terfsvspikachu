import React, { Component } from 'react';
import '../App.css';
import JkRowlingPresent from './JkRowlingPresent';
import PikachuPresent from './PikachuPresent';
import ErrorBoundary from './ErrorBoundary'




class AppPresent extends Component {

    render() {

        return (
            <div className="container text-center">
                <h1>Select Your Character (only the nice one)</h1>
                <hr />
                <div className="row">
                    <ErrorBoundary>
                        <JkRowlingPresent />
                    </ErrorBoundary>
                    
                    <ErrorBoundary>
                        <PikachuPresent />
                    </ErrorBoundary>
                </div>
            </div>
        );

    }

}

export default AppPresent;



// Attentio, les fichiers dans selectCharacter sont exclu des commit (gitignore)