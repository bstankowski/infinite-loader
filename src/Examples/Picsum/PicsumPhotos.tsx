import { PicsumResponse } from "./types";
import css from "./picsum.module.css";

function PicsumPhotos({ pages }: { pages: PicsumResponse[] }) {
    return (
        <section>
            <h2>Picsum Photos</h2>
            <ul>
                {pages.map(({ data }) => {
                    return data.map((photo) => (
                        <li key={photo.id}>
                            <img src={photo.download_url} alt="" className={css.photo} />
                        </li>
                    ));
                })}
            </ul>
        </section>
    );
}

export default PicsumPhotos;
