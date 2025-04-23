interface Articolo {
	id: number;
	Title: string;
	Body: string;
}
  
async function getArticoli(): Promise<Articolo[]> {
	try {
		const res = await fetch('http://localhost:1337/api/articolos?populate=*');
		
		
}
  
export default async function BlogPage() {
	const articoli = await getArticoli();
  
	return (
		<div>
			<h1>Articoli</h1>
			<ul>
				{articoli.map((articolo) => (
					<li key={articolo.id}>
						<h2>{articolo.Title}</h2>
						<p>{articolo.Body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}