import styles from '../../../styles/AdminPanel.module.css';

interface NoDataProps {
  message?: string
}

const defaultMEssage = 'Não há dados cadastrados ou encontrados =('

const NoData: React.FC<NoDataProps> = ({ message = defaultMEssage }) => {
  return (
    <div className={styles.admin_panel}>
      { message}
    </div>
  )
}

export default NoData;
