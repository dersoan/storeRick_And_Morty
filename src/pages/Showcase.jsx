import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from './Showcase.module.css'

import api from '../hooks/useFetch'

export function Showcase({name, id, image,  handleAddItemToCard}) {
  const [repo, setRepo] = useState([]);
  const [status, setStatus] = useState('carregando...');
 
  
  const random = (num) => Math.floor(Math.random() * num).toFixed(2); 
  const valor = random(250);
  const price = parseInt(valor);
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((res) => {
        setRepo(res.data.results);
        setStatus('Dados Carregados com sucesso!');
        handleAddItemToCard={handleAddItemToCard}
      })
      .catch((error) => {
        if (error.response) {
          // A requisição foi feita e o servidor respondeu com um código de status
          // que sai do alcance de 2xx
          console.error(error.response.data)
          console.error(error.response.status)
          console.error(error.response.headers)
        } else if (error.request) {
          // A requisição foi feita mas nenhuma resposta foi recebida
          // `error.request` é uma instância do XMLHttpRequest no navegador e uma instância de
          // http.ClientRequest no node.js
          console.error(error.request)
        } else {
          // Alguma coisa acontenceu ao configurar a requisição que acionou este erro.
          console.error('Error', error.message)
        }
        console.error(error.config)
      })
  }, [])

  return (
    < >
    <div>
      {/* {Array.from(Array(pages), (info, index) =>{
        console.log(info);
        return <button>{index}</button>
      })} */}
    </div>
      <div className={styles.card}>
        {repo.map((res, id ,name ) =>
      <div className={styles.personagens}>
        <img key={res.id} src={res.image} alt="personagem" />
        <h6 key={res.name}>{res.name}</h6>
        <p>Valor R$ {price}</p>
        
        <button onClick={() => handleAddItemToCard(res.image, res.name, price )}>+ Adicionar</button>
        </div>
        
      )}
      </div>
      
    </>
  )
}
