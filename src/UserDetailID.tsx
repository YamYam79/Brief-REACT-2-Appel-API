// Consigne supplémentaire :
// Ajoute un composant te permettant de charger les détails d'un utilisateur à partir de son identifiant, en appelant l'API https://jsonplaceholder.typicode.com/users/:id
// Par exemple si tu veux appeler l'utilisateur avec l'identifiant 1, tu appelleras : https://jsonplaceholder.typicode.com/users/1


// Ici pas besoin de useEffect car l'API ne s'affiche pas automatiquement, mais par l'action de charger (=button)
// 1-L'utilisateur saisit un ID.
// 2- Il clique sur Charger.
// 3- loadUser() est exécutée.
// 4- L'API est appelée.
import { useState } from "react";

// Cela explique à TypeScript la structure de l'objet.
type User = {
    id: number;
    name: string;
    email: string;
};

function UserDetailID() {
    // useState permet de créer une variable qui peut changer et qui provoque le rafraîchissement de l'affichage lorsqu'elle est modifiée.
    // Je crée un état appelé id, initialisé avec une chaîne vide
    // id : la valeur actuelle
    // setId : la fonction qui permet de modifier cette valeur
    // Exemple:setId('5'); Après cet appel id === '5'
    const [id, setId] = useState<string>('');
// crée une variable d'état appelée : user
    // qui contiendra un objet de type : User ou null
// Pourquoi null ?
// Au démarrage : const [user, setUser] = useState<User | null>(null);
// aucun utilisateur n'a encore été chargé depuis l'API.
// Donc : user = null
const [user, setUser] = useState<User | null>(null);

  const loadUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
// Après l'appel API const data = await response.json();
// setUser(data);
// user devient :
// {
//   id: 1,
//   name: "Leanne Graham",
//   email: "Sincere@april.biz",
// }
    const data: User = await response.json();
    setUser(data);
  };

  return (
    <div>
      <h2>Détail utilisateur</h2>

      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID utilisateur"
      />

      <button onClick={loadUser}>
        Charger
      </button>

      {user && (
        <div>
          <p>Nom : {user.name}</p>
          <p>Email : {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserDetailID;

// Résumé visuel :
// Au démarrage :
// id = ""
// user = null
// L'utilisateur saisit :
// 1
// Alors :
// id = "1"
// user = null
// Après le clic sur "Charger" :
// user = {
//   id: 1,
//   name: "Leanne Graham",
//   email: "Sincere@april.biz"
// }
// Et React réaffiche automatiquement l'interface avec les données reçues de l'API.
// C'est tout l'intérêt de useState : conserver des données entre les rendus du composant et mettre l'interface à jour automatiquement quand ces données changent. 


