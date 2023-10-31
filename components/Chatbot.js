import React, {useState, useEffect} from 'react';
import styles from '../components/styles/styles.module.css'




const Chatbot = () => {
    //state
   
    const [chatState, setChatState] = useState(false);
    
    //utility functions
    const changeState =(e) => {
       
        setChatState(!chatState)
        console.log('hey')

    };
  
    
        

    

   
  return (
    <div >
      <div>
      <svg className={styles.online} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#E3FAC4"/>
<circle className='animate-pulse' cx="6" cy="6" r="3" fill="#5FB40E"/>
</svg>
<h2 className={`${styles.onlineTwo} ${styles.convertGreen} font-semibold text-sm`}>Online</h2>
</div>
        <span onClick={(e) =>changeState(e)}>
        <svg  viewBox="0 0 56 56" fill="none"  className= {styles.chat__bubble} >
<circle cx="28" cy="28" r="28" fill="black"/>
<path d="M39.9 17H15.1C13.395 17 12.0155 18.17 12.0155 19.6L12 43L18.2 37.8H39.9C41.605 37.8 43 36.63 43 35.2V19.6C43 18.17 41.605 17 39.9 17ZM18.2 26.1H36.8V28.7H18.2V26.1ZM30.6 32.6H18.2V30H30.6V32.6ZM36.8 24.8H18.2V22.2H36.8V24.8Z" fill="white"/>
</svg>
</span>

<div className={`${chatState === false ? styles.hiddenChat : `${styles.chat__container} ${styles.chatframe} ${styles.animation}`}`}>
<iframe width="100%" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/2c48eac0-2a18-4eb0-b393-582a8ce6c478"></iframe>
<span onClick={(e) =>changeState(e)}>
<svg   viewBox="0 0 24 24" fill="none" className= {styles.close} >
<path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM15.707 9.707C15.8892 9.5184 15.99 9.2658 15.9877 9.0036C15.9854 8.7414 15.8802 8.49059 15.6948 8.30518C15.5094 8.11977 15.2586 8.0146 14.9964 8.01233C14.7342 8.01005 14.4816 8.11084 14.293 8.293L12 10.586L9.707 8.293C9.61475 8.19749 9.50441 8.12131 9.3824 8.0689C9.2604 8.01649 9.12918 7.9889 8.9964 7.98775C8.86362 7.9866 8.73194 8.0119 8.60905 8.06218C8.48615 8.11246 8.3745 8.18671 8.28061 8.28061C8.18671 8.3745 8.11246 8.48615 8.06218 8.60905C8.0119 8.73194 7.9866 8.86362 7.98775 8.9964C7.9889 9.12918 8.01649 9.2604 8.0689 9.3824C8.12131 9.50441 8.19749 9.61475 8.293 9.707L10.586 12L8.293 14.293C8.19749 14.3852 8.12131 14.4956 8.0689 14.6176C8.01649 14.7396 7.9889 14.8708 7.98775 15.0036C7.9866 15.1364 8.0119 15.2681 8.06218 15.391C8.11246 15.5139 8.18671 15.6255 8.28061 15.7194C8.3745 15.8133 8.48615 15.8875 8.60905 15.9378C8.73194 15.9881 8.86362 16.0134 8.9964 16.0123C9.12918 16.0111 9.2604 15.9835 9.3824 15.9311C9.50441 15.8787 9.61475 15.8025 9.707 15.707L12 13.414L14.293 15.707C14.4816 15.8892 14.7342 15.99 14.9964 15.9877C15.2586 15.9854 15.5094 15.8802 15.6948 15.6948C15.8802 15.5094 15.9854 15.2586 15.9877 14.9964C15.99 14.7342 15.8892 14.4816 15.707 14.293L13.414 12L15.707 9.707Z" fill="white"/>
</svg>
</span>
</div>
</div>
  )
}

export default Chatbot