import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.page}>
			<div className={styles.container}>
				<h1>Benvenuto</h1>
				<p>Benvenuto nella mia app Next.js che mostra i paesi del mondo tramite GraphQL!</p>
				<ul>
					<li><a href="/countries">Vai alla lista dei paesi</a></li>
					<li><a href="/blog">Vai alla lista dei paesi</a></li>
				</ul>
			</div>
		</main>
	);
}
