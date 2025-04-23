import { GetStaticProps } from 'next';

interface Articolo {
  id: number;
  attributes: {
    titolo: string;
    contenuto: string;
  };
}

interface HomeProps {
  articoli: Articolo[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = await fetch('http://localhost:1337/api/articoli?populate=*');
  const data = await res.json();

  return {
    props: {
      articoli: data.data,
    },
  };
};

const Home = ({ articoli }: HomeProps) => {
  return (
    <div>
      <h1>Articoli</h1>
      <ul>
        {articoli.map((articolo) => (
          <li key={articolo.id}>
            <h2>{articolo.attributes.titolo}</h2>
            <p>{articolo.attributes.contenuto}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;