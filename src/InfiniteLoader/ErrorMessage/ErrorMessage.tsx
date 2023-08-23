import css from "./errorMessage.module.css";

interface ErrorMessageProps {
    message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
    return <p className={css.errorMessage}>{message}</p>;
}

export default ErrorMessage;
