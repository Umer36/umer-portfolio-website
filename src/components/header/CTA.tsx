import React from 'react'
import CV from './UmerResume25.pdf'

const CTA=():JSX.Element=> {
  return (
    <div className='cta'>
      <a href={CV} download="Umer_Momin_Resume.pdf" className='btn btn-modern'>
        <span className='btn-icon'>⬇</span>
        Download Resume
      </a>
      <a href="#contact" className='btn btn-primary btn-modern'>
        <span className='btn-icon'>✨</span>
        Let&apos;s Connect
      </a>
    </div>
  )
}

export default CTA
