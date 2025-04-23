interface Articolo {
	id: number;
	attributes: {
		title: string;
		body: string;
	};
}

export async function getStaticProps() {
	// Fai il fetch dagli articoli in Strapi
	const res = await fetch('http://localhost:1337/api/articolos?populate=*');
	const data = await res.json();
  
	// Restituisci i dati come prop
	return {
	  props: {
		articoli: data.data,
	  },
	};
  }

export default async function BlogPage() {
	
	const articoli = await getArticoli();
	console.log('Articoli dopo fetch:', articoli);

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
}