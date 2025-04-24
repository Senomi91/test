import styles from '../page.module.css';

type Articolo = {
	id: number;
	Title: string;
	Body: string;
	publishedAt: string;
}
  
async function getArticoli(): Promise<Articolo[]> {
	try {
		const res = await fetch('http://localhost:1337/api/articolos?populate=*');
		
		const data = await res.json();
		console.log('RISPOSTA STRAPI:', data);
		
		return data.data || [];
		
	} catch (error) {
		console.error('Errore durante il fetch', error);
		return [];
	}
}
  
export default async function BlogPage() {
	const articoli = await getArticoli();
  
	return (
		<main className={styles.page}>
			<div className={styles.container}>
				<h1 className={styles.title}>Blog</h1>
				<ul>
					{articoli.map((articolo) => (
						<li className={styles.post_list} key={articolo.id}>
							<h3 className={styles.post_title}>{articolo.Title}</h3>
							<p className={styles.small}>
								{new Date(articolo.publishedAt).toLocaleDateString(
										"it-IT", {
											day: "2-digit",
											month: "long",
											year: "numeric"
										}
									)
								}
							</p>
							<p>{articolo.Body}</p>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}