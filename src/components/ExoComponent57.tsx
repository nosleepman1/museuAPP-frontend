// Exercice React / TS #57
import React, { useState, useEffect } from 'react';

export function ExoComponent57() {
  const [compteur, setCompteur] = useState<number>(57);
  useEffect(() => {
    console.log('Composant 57 monté, valeur =', compteur);
  }, [compteur]);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>
      <h3>Composant Débutant #57</h3>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer ({compteur})</button>
    </div>
  );
}
