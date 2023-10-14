import Styles from './loading.module.css'

export default function Loading({loadingText = 'Please wait...'}) {
    return (
        <div className={Styles.spinnerOverlay}>
            <div className={Styles.spinnerContainer}>
                <div className={Styles.spinner}></div>
                <p>{loadingText}</p>
            </div>
        </div>
    )
}