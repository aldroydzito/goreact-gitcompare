import React, { Component } from 'react';
import moment from 'moment';
import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';
import api from '../../services/api';

import logo from '../../assets/logo.png';

class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: 'facebook/react',
    repositories: [],
  };

  componentDidMount() {
    const repositories = JSON.parse(localStorage.getItem('repositories'));
    this.setState({ repositories });
  }

  handleAddRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      await this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });

      this.repositoriesToStorage();
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleUpdateRepository = async (repo) => {
    await api.get(`/repos/${repo.owner.login}/${repo.name}`);

    const repositories = this.state.repositories.map(r => (r.id === repo.id ? repo : r));
    this.setState({
      repositories,
    });
    this.repositoriesToStorage();
  };

  handleRemoveRepository = async (repo) => {
    const repositories = this.state.repositories.filter(r => r.id !== repo.id);
    await this.setState({
      repositories,
    });
    this.repositoriesToStorage();
  };

  repositoriesToStorage = () => {
    localStorage.setItem('repositories', JSON.stringify(this.state.repositories));
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>

        <CompareList
          updateRepository={this.handleUpdateRepository}
          removeRepository={this.handleRemoveRepository}
          repositories={this.state.repositories}
        />
      </Container>
    );
  }
}

export default Main;
