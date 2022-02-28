import Repositoryitem from "./RepositoryItem";
import '../styles/repositories.scss';
import React, { useState, useEffect } from "react";

const url = 'https://api.github.com/users/mauricio-br182/repos'

export default function RepositoryList() {

    interface Repository{
        name: string;
        description: string;
        html_url: string;
    }
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className='repository-list'>
            <h1>Lista de repositórios</h1>
            <ul>
            {
            repositories.map(repository => {
              return  <Repositoryitem key={repository.name} repository={repository} />
            })}
            </ul>
        </section>
    )
}

