import  React  from 'react';
import styles from './Loading.module.css';

const Loading = () =>{
    return(
<div className={`${styles.lds_css}
 ${styles.ng_scope}`}>
 <div 
 className={styles.lds_rolling}>
   <div></div>
   <div></div>
 </div>
</div>
  );
 }

 export default Loading;
