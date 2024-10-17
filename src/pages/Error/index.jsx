import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <main ClassName='error-message'>
      <h1 ClassName='error-message__number'>404</h1>
      <p ClassName='error-message__text'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/' ClassName='error-message__text'>
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}

export default Error
