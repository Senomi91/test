interface Articolo {
	id: number;
	attributes: {
		titolo: string;
		contenuto: string;
	};
}

async function getArticoli(): Promise<Articolo[]> {
	const res = await fetch('http://localhost:1337/api/articoli?populate=*', {
		cache: 'no-store',
	});
	const data = await res.json();
	return data.data;
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
						<h2>{articolo.attributes.titolo}</h2>
						<p>{articolo.attributes.contenuto}</p>
					</li>
					))
				) : (
					<li>Nessun articolo trovato.</li>
				)}
			</ul>
		</div>
	);
}