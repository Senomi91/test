export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Benvenuto </h1>
      <p>Benvenuto nella mia app Next.js che mostra i paesi del mondo tramite GraphQL!</p>

      <ul>
        <li><a href="/countries">Vai alla lista dei paesi</a></li>
        <li><a href="/blog">Vai alla lista dei paesi</a></li>
      </ul>
    </main>
  );
}