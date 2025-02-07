import React, { useState } from 'react';

const LogAnalyzer: React.FC = () => {
  const [logs, setLogs] = useState('');
  const [analysis, setAnalysis] = useState('');

  const analyzeLogs = () => {
    const errorCount = (logs.match(/ERROR/g) || []).length;
    setAnalysis(`Found ${errorCount} errors in the logs.`);
  };

  return (
    <div>
      <h2>Log Analyzer</h2>
      <textarea
        value={logs}
        onChange={(e) => setLogs(e.target.value)}
        placeholder="Paste logs here"
      />
      <button onClick={analyzeLogs}>Analyze Logs</button>
      <p>{analysis}</p>
    </div>
  );
};

export default LogAnalyzer;