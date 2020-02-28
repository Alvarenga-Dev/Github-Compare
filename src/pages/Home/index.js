import React, { Component } from 'react';
import api from '../../service/api';
import moment from 'moment';
import { Container, Title, Form } from "./styles";
import CompareList from '../../components/CompareList';

export default class Home extends Component {

  state = {
    loading: false,
    inputError: false,
    repositoryInput: '',
    repositories: [],
  }

  handleAddRepository = async (event) => {
    event.preventDefault();

    this.setState({ loading:true });

    try {

      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        inputError: false,
        repositoryInput: '',
        repositories: [...this.state.repositories, repository]
     });

    } catch (error) {
      this.setState({ inputError: true })
    } finally {
      this.setState({ loading: false })
    }

  }

  render() {
    return (
      <Container>
          <Title>Gitcompare</Title>
            <Form borderError={this.state.inputError} onSubmit={this.handleAddRepository}>
                <input
                  type="text"
                  placeholder="Usuário/Respositório"
                  value={ this.state.repositoryInput }
                  onChange={ event => this.setState({repositoryInput: event.target.value}) }
                />
                <button type="submit">{
                  (this.state.loading ? <i class="fa fa-spinner fa-pulse"></i> : <i class="fa fa-plus"></i>)
                }</button>
            </Form>
          <CompareList repositories={this.state.repositories} />
        </Container>
    )
  }
}
