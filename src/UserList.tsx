// import des hooks REACT
// useState permet de stocker des données dans le composant
// Exemple : const [nom, setNom] = useState(""); nom = la valeur actuelle; setNom = la fonction qui modifie la valeur
// useEffect : Permet d'exécuter du code lorsqu'un composant est affiché.
// Exemple : useEffect(() => {
//   console.log("Composant chargé");
// }, []);
import { useEffect, useState } from "react";


// on crée un type TypeScript
type User = {
  id: number;
  name: string;
  email: string;
};

// Déclaration du composant 
function UserList() {
    // création du State
    // users contient la liste actuelle des utilisateurs = [] 
    // setUsers Fonction qui permet de modifier users
    // Exemple : setUsers(data)
    // useState<User[]> TypeScript comprend que users est un tableau de User []
  const [users, setUsers] = useState<User[]>([]);

// Execution au chargement du composant = useEffect(() => {
// React exécute ce code quand le composant est monté.
  useEffect(() => {
// Création d'une fonction asynchrone parce que fetch(...) est asynchrone. 
// Le serveur doit attendre la réponse du serveur
    async function fetchUsers() {

// Appel de l'API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
// conversion du Json, la réponse est au format Json; on la transforme ensuite au format JS
      const data = await response.json();
// Mise à jour du State => Users devient data. React détecte le changement et affiche automatiquement le composant
      setUsers(data);
    }

    fetchUsers();
    // Fin du useEffect }, []); le tableau vide signifie "executer une seule fois au chargement"
  }, []);

  return (
    <div>
    
    {/* parcourir le tableau = user est un tableau et map() parcourt chaque élément donc chaque user chacun son tour   */}
      {users.map((user) => (
    // React a toujours besoin d'une clé unique d où "key". L'affichage (nom et email) change à chaque fois selon l'id
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        // La boucle continue jusqu'au dernier utilisateur. Comme l'API renvoie 10 utilisateurs, React affiche 10 blocs.
      ))}
    </div>
  );
}

export default UserList;

// Résumé :
// 1. UserList est chargé

// 2. useEffect s'exécute

// 3. fetch envoie une requête à l'API

// 4. L'API renvoie 10 utilisateurs

// 5. response.json() convertit la réponse

// 6. setUsers(data)

// 7. React détecte le changement

// 8. React ré-affiche le composant

// 9. users.map(...) affiche chaque utilisateur