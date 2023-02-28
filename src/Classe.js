import React from 'react';

export default class Classe extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <>
                <h1> Primeiro Componente de Classe</h1>
                <h1> Canal: {this.props.cursos}</h1>
            </>
            
        )
    }
}