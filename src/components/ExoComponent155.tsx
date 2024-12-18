// Exercice React / TS #155
import React, { useState, useEffect } from 'react';

export function ExoComponent155() {
  const [compteur, setCompteur] = useState<number>(155);
  useEffect(() => {
    console.log('Composant 155 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #155</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
