import React from 'react';

const Resume: React.FC = () => {
  return (
    <div>
      <h1>Charles Javaris</h1>
      <p>Washington Metropolitan Area | charlesjavaris@gmail.com</p>

      <h2>CORE COMPETENCIES</h2>
      <ul>
        <li>Development Language Knowledge: HTML, CSS, SQL, Python, Typescript, JavaScript</li>
        <li>Cloud & Database Management: AWS, GCP, PostgreSQL, BigQuery</li>
        <li>Monitoring & Logging: Splunk, Grafana, Kibana, Datadog</li>
        <li>Version Control & Event Streaming: Git, Kafka</li>
        <li>Collaboration & Support Tools: Slack, JIRA, Zendesk, ServiceCloud, Zoom</li>
      </ul>

      <h2>PROFESSIONAL EXPERIENCE</h2>
      <h3>Senior IAM Support Engineer II | Ping Identity | October 2024—Present</h3>
      <ul>
        <li>Contributed to Python scripts for automating certificate renewals and API integrations, reducing manual intervention by 30%.</li>
        <li>Troubleshoot IAM issues, including LDAP, Directory Services, authentication protocols, and PKI (X.509 certificates).</li>
        <li>Created detailed technical documentation and guides for developers integrating IAM solutions, reducing support requests by 15%.</li>
        <li>Analyze logs and HTTP traces to investigate issues, optimizing REST and SCIM API integrations.</li>
      </ul>

      <h3>Senior Technical Support Engineer | Twilio | October 2022—August 2024</h3>
      <ul>
        <li>Develop concise runbooks for common issues to expedite resolution, increase efficiency, and decrease escalation to engineering by 20%.</li>
        <li>Work with engineering and product teams on TwilioGPT, leveraging OpenAI's Assistant API for an internal Support Assistant and improving support automation.</li>
        <li>Provided sample Python code and troubleshooting guidance to developers integrating Twilio APIs, improving developer satisfaction scores by 25%.</li>
        <li>Configure internal Python scripts for Apache Kafka to attempt publishing any playloads that may have initially failed.</li>
        <li>Highlighted recurring issues in customer feedback, leading to prioritization of 3 new product features in the Twilio roadmap.</li>
      </ul>

      <h3>Technical Support Engineer III | Zuora | May 2020—October 2022</h3>
      <ul>
        <li>Identified customer pain points in Zuora's Hosted Pages feature and collaborated with product management and engineering to revamp the feature, resulting in saving clients over $250,000 in payment gateway processing fees by implementing fraud safeguards.</li>
        <li>Resolved 10+ recurring bugs in hosted payment pages, improving client satisfaction and reducing support tickets.</li>
        <li>Utilized Chrome Developer Tools to analyze .HAR files troubleshoot various issues around client live and test environments.</li>
        <li>Participated in on-call shifts, de-escalating customer issues and leading incident management, as well as updating the company's trust page.</li>
      </ul>
    </div>
  );
};

export default Resume;