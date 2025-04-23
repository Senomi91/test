interface Articolo {
	id: number;
	attributes: {
		title: string;
		body: string;
	};
}

async function getArticoli(): Promise<Articolo[]> {
	try {
	  const res = await fetch('http://localhost:1337/api/articolos?populate=*', {
		cache: 'no-store',
	  });
  
	  if (!res.ok) {
		console.error('Errore nella fetch:', res.status);
		return [];
	  }
  
	  const data = await res.json();
	  console.log('RISPOSTA STRAPI:', data);
	  return data.data || [];
	} catch (error) {
	  console.error('Errore durante il fetch:', error);
	  return [];
	}
  }

export default async function BlogPage() {
	const articoli = await getArticoli();

	return (
		<div>
			<h1>Articoli</h1>
			<ul>
				{articoli && articoli.length > 0 ? (
					articoli.map((articolo) => (
					<li key={articolo.id}>
						<h2>{articolo.attributes.title}</h2>
						<p>{articolo.attributes.body}</p>
					</li>
					))
				) : (
					<li>Nessun articolo trovato.</li>
				)}
			</ul>
		</div>
	);
}