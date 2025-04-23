import styles from '../page.module.css';

import { GraphQLClient, gql } from 'graphql-request';

type Country = {
  code: string;
  name: string;
};

const endpoint = 'https://countries.trevorblades.com/';

const query = gql`
	query {
		countries {
			code
			name
		}
	}
`;

function getFlags(code: string) {
	return code
		.toUpperCase()
		.replace(/./g, (char) =>
		String.fromCodePoint(char.charCodeAt(0) + 127397)
	);
}

export default async function CountriesPage() {
	const client = new GraphQLClient(endpoint);
	const data = await client.request<{ countries: Country[] }>(query);

	return (
		<main className={styles.page}>
			<div className={styles.container}>
				<h1 className={styles.title}>Countries</h1>
				<ul className={styles.list}>
					{data.countries.map((country) => (
						<li key={country.code} className={styles.country}>
							{getFlags(country.code)} {country.code} - {country.name} 
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}