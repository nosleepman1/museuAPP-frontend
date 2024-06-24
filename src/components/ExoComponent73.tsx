// Exercice React / TS #73
import React, { useState, useEffect } from 'react';

export function ExoComponent73() {
  const [compteur, setCompteur] = useState<number>(73);
  useEffect(() => {
    console.log('Composant 73 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #73</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
