import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from "./styles";

const CompareList = ({ repositories }) => (
    <Container>
      {repositories.map(respository => (
        <Repository key={respository.id}>
          <header>
              <img src={respository.owner.avatar_url} alt={respository.owner.login}/>
              <strong>{respository.name}</strong>
              <small>{respository.owner.login}</small>
          </header>
          <ul>
              <li>{respository.stargazers_count} <small>Stars</small></li>
              <li>{respository.forks_count} <small>Forks</small></li>
              <li>{respository.open_issues_count} <small>Issues</small></li>
              <li>{respository.lastCommit} <small>Last Commit</small></li>
          </ul>
        </Repository>
      ))}
    </Container>
);

CompareList.protoType = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
    name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    lastCommit: PropTypes.string,
  })).isRequired,
}

export default CompareList;
