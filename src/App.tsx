import { useFetch } from './hooks/useFetch';

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const { data: repositories, isFetching } =
    useFetch<Repository[]>('/users/diego3g/repos')

  return (
    <div className="App">
      <ul>
        {isFetching && <p>carregando...</p>}
        {repositories?.map(repo => {
          return (
            <li key={repo.full_name}>
              <strong> {repo.full_name} </strong>
              <p> {repo.description} </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
