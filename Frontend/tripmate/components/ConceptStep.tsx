import styles from './conceptStep.module.css';

export default function ConceptStep({ title, description }: { title: string; description: string }) {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
