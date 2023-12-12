/*export function Links(){
    return (
        <>
        <h1>Links</h1>
        </>
    );
}*/

// Links.tsx

import React from 'react';

export function Links() {
    return (
    <>
    <div className="links-container">
      <h1 className="links-title">Links</h1>
      <section className="links-section">
        <h2 className="links-subtitle">Government Initiatives</h2>
        <ul className="links-list">
          <li className="links-item">
            <a
              href="https://main.mohfw.gov.in/?q=major-programmes/Non-Communicable-Diseases/Non-Communicable-Diseases-1"
              target="_blank"
              rel="noopener noreferrer"
              className="links-link"
            >
              National Health Portal
            </a>
          </li>
          <li className="links-item">
            <a
              href="https://www.india.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="links-link"
            >
              Official Website of the Government of India
            </a>
          </li>
          {/* Add more government initiatives */}
        </ul>
      </section>

      <section className="links-section">
        <h2 className="links-subtitle">NGOs and Organizations</h2>
        <ul className="links-list">
          <li className="links-item">
            <a
              href="https://www.helpageindia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="links-link"
            >
              HelpAge India
            </a>
          </li>
          <li className="links-item">
            <a
              href="https://www.helpageindia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="links-link"
            >
              Agewell Foundation
            </a>
          </li>
          {/* Add more NGOs and organizations */}
        </ul>
      </section>

      <section className="links-section">
        <h2 className="links-subtitle">Healthcare Services</h2>
        <ul className="links-list">
          <li className="links-item">
            <a
              href="https://www.maxhealthcare.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="links-link"
            >
              Max Healthcare
            </a>
          </li>
          <li className="links-item">
            <a
              href="https://www.apollohospitals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="links-link"
            >
              Apollo Hospitals
            </a>
          </li>
          {/* Add more healthcare services */}
        </ul>
      </section>
    </div>
    </>
    );
}
