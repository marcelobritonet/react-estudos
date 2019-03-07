import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName, setLastName, getInfo } from '../../actions';
import { Header } from '../../components/header';

class BuscaCep extends Component {
    state = {
        updatedName: this.props.name,
        updatedLastName: this.props.lastName,
        updatedCep: this.props.info.cep
    };

    changeName = event => {
        this.setState({
            updatedName: event.target.value
        })
    };

    changeLastName = event => {
        this.setState({
            updatedLastName: event.target.value
        })
    };

    changeCnpj = event => {
        this.setState({
            updatedCep: event.target.value
        })
    };

    render() {
        const {
            name,
            lastName,
            info,
            setName,
            setLastName,
            getInfo,
        } = this.props;

        const {
            updatedName,
            updatedLastName,
            updatedCep
        } = this.state;

        return (
            <div className="busca-cep">
                <Header>Oi jovem</Header>
                <h1>{ name }</h1><h2>{ lastName }</h2>

                <input type='text' onChange={ this.changeName } value={ updatedName }/>
                <button onClick={() => setName(updatedName)}>Atualizar Nome</button>
                <br/>

                <input type="text" onChange={ this.changeLastName } value={ updatedLastName }/>
                <button onClick={() => setLastName(updatedLastName)}>Atualizar Sobre nome</button>
                <br/>

                <h3>Endereçco</h3>
                <p>{ info.logradouro }, { info.bairro } - { info.localidade }, { info.uf }, CEP { info.cep }</p><br/><br/>
                <input type="text" onChange={ this.changeCnpj } value={ updatedCep }/>
                <button onClick={() => getInfo(updatedCep)}>Buscar Novo Endereço</button>
            </div>
        );
    }
}

const mapStateToProp = store => ({
    name: store.clickState.name,
    lastName: store.clickState.lastName,
    cnpj: store.clickState.cnpj,
    info: store.clickState.info
});

const mapDispatchToProps = {
    setName,
    setLastName,
    getInfo
};

export default connect(mapStateToProp, mapDispatchToProps)(BuscaCep);
