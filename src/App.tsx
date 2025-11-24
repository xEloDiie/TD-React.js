import { useState, useEffect } from 'react'
import SuperHerosData from './SuperHeros.json'
import './App.css'

function App() {
  // Variable nom
  const nom = 'Toto'

  // État compteur
  const [compteur, setCompteur] = useState(0)

  // État super-héros
  const [superHeros, setSuperHeros] = useState<any[]>([])

  // État de recherche
  const [search, setSearch] = useState('')

  // Mettre à jour le titre du document à chaque changement de compteur
  useEffect(() => {
    document.title = `Vous avez cliqué ${compteur} fois`
  }, [compteur])

  // Charger les super-héros depuis le JSON au montage
  useEffect(() => {
    setSuperHeros(SuperHerosData.superheros)
  }, [])

  // Filtrer les héros selon la recherche
  const filteredHeroes = superHeros.filter(hero =>
    hero.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <h1>Bonjour {nom}, je découvre React !</h1>

      {/* Compteur */}
      <p>Compteur : {compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>+</button>
      <button onClick={() => setCompteur(0)}>Réinitialiser</button>

      {/* Nombre de super-héros */}
      <p>Il y a {superHeros.length} super-héros dans la base.</p>

      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Rechercher un héros"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Liste des noms des super-héros */}
      <ul>
        {filteredHeroes.map(hero => (
          <li key={hero.id}>
            <img
              src={`https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/images/lg/${hero.slug}.jpg`}
              alt={hero.name}
              width={50}
              height={60}
              style={{ borderRadius: '50%', marginRight: '.5rem', objectFit: 'fill'}}
            />
            <span>{hero.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
