import css from "./activityIndicator.module.css";

function ActivityIndicator() {
    return (
        <div className={css.activityIndicator}>
            <span>Loading…</span>
        </div>
    );
}

export default ActivityIndicator;
