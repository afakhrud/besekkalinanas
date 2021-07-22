import styles from './Content.module.css';

function Content(props) {
    return (
        <div className={styles.content}>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Content
