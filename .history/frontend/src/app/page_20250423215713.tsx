import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.page} style={{height: '100vh'}}>
			<div className={styles.container}>
				<h1 className={styles.title}>Benvenuto</h1>
				<p>Benvenuto nella mia app Next.js che mostra i paesi del mondo tramite GraphQL!</p>
				<ul>
					<li><a className={styles.button} href="/countries">Vai alla lista dei paesi</a></li>
					<li><a className={styles.button} href="/blog">Vai alla lista dei paesi</a></li>
				</ul>
			</div>
		</main>
	);
}