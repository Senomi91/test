'use client';

import { useEffect, useState } from 'react';

interface Articolo {
  id: number;
  attributes: {
    title: string;
    body: string;
  };
}

const BlogPage = () => {
  const [articoli, setArticoli] = useState<Articolo[]>([]);

  // Funzione per fare la fetch dei dati da Strapi
  const getArticoli = async () => {
    try {
      const res = await fetch('http://localhost:1337/api/articolos?populate=*');
      if (!res.ok) {
        throw new Error('Errore nella fetch dei dati');
      }

      const data = await res.json();
      setArticoli(data.data); // Salva i dati nel nostro stato
    } catch (error) {
      console.error('Errore durante la fetch:', error);
    }
  };

  useEffect(() => {
    getArticoli(); // Chiamata per fetchare i dati appena il componente viene montato
  }, []);

  return (
    <div>
      <h1>Articoli</h1>
      <ul>
        {articoli.map((articolo) => (
          <li key={articolo.id}>
            <h2>{articolo.attributes.title}</h2>
            <p>{articolo.attributes.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
