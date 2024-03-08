import Link from "next/link";
import Image from "next/image";
import styles from "./rodape.module.css"

export default function Rodape(){
    return(
        <footer className={styles.rodape}> 
            <Link href="https://ead.ifms.edu.br/">
            <Image 
            width={120}
            height={80}
            src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACG0lEQVR4AWIYnADA5jwAyRFEYQD+u6dnNrNnK7ZtO2XFtpNCrDJjFWPbKKUUOymEhbOx3tH1TJ99X5vv3bp5E7m5uVg0f4Eyafz4hPGjx/ZcMG9+kspkvHnzFs0x1Fu+YTuUqDgpmPu/89XLV8acPX1mlK5pfTnnqe6IiE+OEEeGDh8OSAzNkZOHdiHKrSrZhSWjKzze5X6/b3aZX+tYHggxXsnRQVUvkdiOOz9v4pruMRMIJRRM9skz9oft/6/AhvTomJFdULKaSGwep3IvDYrbYRyKosAwTahCG31+SslaI88cL4Q9BLSmkBzrxa5rNK7LbWn/5M5xnLlyPLHdrxSVlsVohjmCcxu6rkMhtrVxqJQyJsWaBWH3ByU2IaDV80HVbSZso4x1rPitd6QsEPL99KUmx+Z4oxgKPdT8K0U/TXLHPprXr3w7EZUTQKViosYuIRL1CMN3G4L3AzfmMwH0gcODc6K9PkLzLFslcJLkUjE8cR/1/M0iSJwGYAKAfDjOd6n3NJ3/e5kDzvsBiKOi0owTpp4OmwMQkIiAizqOKjmO4lIBwAFQPwoB2Q2ACICgBiWy6zcoLSaShBoQgKhtAgJNUL/XGqMd+2VDCOaUfAQctKPpEWlnn0VsueAAsIKH+gICFgh0AKH6lGuqUXMOIIwmGgADAmGGlu4D+AzArG6l9UHOVLd71S1Y3bSqQQ2uBtI9YIsGHAAAxnf2EcnJk9MAAAAASUVORK5CYII="} /> 
            </Link>
        </footer>
    )
}