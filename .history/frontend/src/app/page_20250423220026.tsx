import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.page} style={{height: '100vh'}}>
			<div className={styles.container}>
				<h1 className={styles.title}>Benvenuto</h1>
				<p>Test tecnico Frontend - Next.js + GraphQL</p>
				<ul>
					<li><a className={styles.button} href="/countries">Lista paesi</a></li>
					<li><a className={styles.button} href="/blog">Blog</a></li>
				</ul>
			</div>
		</main>
	);
}