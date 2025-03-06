import './Button.css';


export default function Button({ className, label, clickHandler }) {

    return (
        <button onClick={clickHandler} className={`btn ${className}`}>
            {label}

        </button>
    );
}