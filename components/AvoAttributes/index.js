import React from 'react'
import styles from './styles.module.css'

const AvoAttribute = ({ avoAttributes }) => {
  const { shape, hardiness, taste } = avoAttributes.attributes
  return (
    <div className={styles.attributesContainer}>
      <div className={styles.borderBottom}>
        <h4>Attributes</h4>
      </div>
      <div className={styles.borderBottom}>
        <h4>Shape</h4>
        <span>{shape}</span>
      </div>
      <div className={styles.borderBottom}>
        <h4>Hardiness</h4>
        <span>{hardiness}</span>
      </div>
      <div>
        <h4>Taste</h4>
        <span>{taste}</span>
      </div>
    </div>
  )
}

export default AvoAttribute
