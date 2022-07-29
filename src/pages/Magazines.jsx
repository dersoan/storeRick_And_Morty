import React from 'react'
import styles from '../pages/Magazines.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import api from '../hooks/useFetch'

export function Magazines() {
  const [repo, setRepo] = useState([])

  useEffect(() => {
    const config = {
      transformResponse: [
        function (data) {
          const payload = JSON.parse(data).map((o) => {
        
            return {
              name: o.name,
            }
          })
          return payload
          
        },
      ],
    }

    axios
      .get(api, config)
      .then((o) => {
        setRepo(o.data)
      })
      .catch(() => {
        return 'deu error'
      })
      .finally(() => {})
  }, [])

  return (
    <div className={styles.container}>
      {repo.map((data) => {
        return (
          <div>
            <span key={name}>{data.name}</span>
          </div>
        )
      })}
      <div className={styles.item}>1 Magazines</div>
      <div className={styles.item}>2 Magazines</div>
      <div className={styles.item}>3 Magazines</div>
      <div className={styles.item}>4 Magazines</div>
      <div className={styles.item}>1 Magazines</div>
      <div className={styles.item}>2 Magazines</div>
      <div className={styles.item}>3 Magazines</div>
      <div className={styles.item}>4 Magazines</div>
      <div className={styles.item}>1 Magazines</div>
      <div className={styles.item}>2 Magazines</div>
      <div className={styles.item}>3 Magazines</div>
      <div className={styles.item}>4 Magazines</div>
      <div className={styles.item}>1 Magazines</div>
      <div className={styles.item}>2 Magazines</div>
      <div className={styles.item}>3 Magazines</div>
      <div className={styles.item}>4 Magazines</div>
    </div>
  )
}
