import { PeopleResponse } from "./types";
import css from "./starwars.module.css";

function StarWarsPeople({ pages }: { pages: PeopleResponse[] }) {
    return (
        <section>
            <h2>Star Wars Characters</h2>
            <ul>
                {pages.map(({ results }) =>
                    results.map((person) => (
                        <li key={person.name}>
                            <table className={css.personSummary}>
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td>{person.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Birth year</th>
                                        <td>{person.birth_year}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mass</th>
                                        <td>{person.mass}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Hair color</th>
                                        <td>{person.hair_color}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    ))
                )}
            </ul>
        </section>
    );
}

export default StarWarsPeople;
