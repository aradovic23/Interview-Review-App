import React from 'react'
import './WizardCandidates.scss'

export default function WizardCandidates({name, email, id}) {
    return (
        <section className='wizard-candidates' >
            <div className='candidate-wizard-card' key={id}>
                <span>{name}</span>
                <span>{email}</span>
            </div>
          
        </section>
    )
}
