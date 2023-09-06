import React from 'react'

const Alert = ({ alert }) => {
    return (
        alert &&
        <div className="alert cont" role="alert"
            style={{
                border:'solid 1px black',
                position: 'fixed', bottom: '5%', height: '80vh', width: '50%', zIndex: 9999, 
                opacity: 1, // Make the alert visible/invisible
                transition: 'opacity 0.3s ease-in-out', // Add a smooth transition effect
                backdropFilter: 'blur(10px)'
            }}
        >
            <strong>{alert}</strong>
        </div>
    )
}

export default Alert;