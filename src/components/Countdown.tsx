import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {
    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext);

    const [minL, minR] = String(minutes).padStart(2, '0').split('');
    const [secL, secR] = String(seconds).padStart(2, '0').split('');

    
    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minL}</span>
                    <span>{minR}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secL}</span>
                    <span>{secR}</span>
                </div>
            </div>

            { hasFinished ? (
            <button
                disabled
                className={styles.countdownButton}
             >
                 Ciclo encerrado
             </button>
            ) : (
                <>
                    { isActive ? (
                    <button
                        type="button"
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown}
                    >
                        Abandonar ciclo
                    </button>
                    ) : (
                        <button
                        type="button"
                        className={styles.countdownButton}
                        onClick={startCountdown}
                    >
                        Iniciar um ciclo
                    </button>
                    ) }
                </>
            ) }

            
        </div>
    );
}