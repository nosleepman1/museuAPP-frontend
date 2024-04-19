// Exercice React / TS #35
import React, { useState, useEffect } from 'react';

export function ExoComponent35() {
  const [compteur, setCompteur] = useState<number>(35);
  useEffect(() => {
    console.log('Composant 35 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #35</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
