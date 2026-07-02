
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './Home.tsx';
import UserList from './UserList.tsx';
import UserDetailID from './UserDetailID.tsx';

import { BrowserRouter, Routes, Route, Link } from "react-router";
// BrowserRouter est le point d'entrée de ma configuration de routage. Son rôle prinicipal est d'utiliser l'API

// Routes` : Ce composant est un conteneur pour vos différentes définitions de routes (``). 
// Sa fonction essentielle est d'examiner l'URL actuelle et de rendre le contenu de la **première** `` enfant qui correspond au chemin (`path`). 
// C'est ce qui garantit qu'une seule route est rendue à la fois pour une URL donnée

// Route` :** C'est le composant qui définit la correspondance entre un chemin d'URL (`path`) et le composant React (`element`) qui doit être rendu lorsque ce chemin est actif. 
// Chaque `` doit être un enfant direct de ``. Ses deux props principales sont :
// `path`: Une chaîne de caractères qui représente le segment d'URL à faire correspondre (ex: `/`, `/a-propos`, `/produits/:id`).
// `element`: Le composant React (passé comme une expression JSX, par exemple ``) à afficher lorsque le `path` correspond à l'URL actuelle.

// Link et NavLink
// Les composants Link et NavLink de React Router permettent de créer des liens internes dans votre application sans recharger la page. 
// Ils remettent en œuvre la balise HTML <a> pour naviguer entre les différentes vues de votre application, tout en évitant un rechargement complet du navigateur. 
// Cela améliore la performance et la fluidité de la navigation. Le composant Link utilise l'historique du navigateur pour changer l'URL sans recharger la page
// Tandis que le composant NavLink applique automatiquement un style ou une classe CSS au lien correspondant à la route active, indiquant à l'utilisateur où il se trouve dans l'application. 

// /render, permet d'afficher le contenu de tous les composants
createRoot(document.getElementById('root')!).render(
  // BrowserRouter est le point d'entrée de ma configuration de routage. Son rôle prinicipal est d'utiliser l'API
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Page d'accueil</Link>
        </li>
        <li>
          <Link to="/liste-utilisateurs"> Liste des utilisateurs </Link>
        </li>
        <li>
          <Link to="/detail-utilisateurs-par-ID"> Détail par utilisateur </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/liste-utilisateurs' element={<UserList />} />
      <Route path='/detail-utilisateurs-par-ID' element={<UserDetailID />} />
    </Routes>
  </BrowserRouter>,
);



