import styles from './index.module.css';
import sqlLogo from './assets/sql-logo.png';
import { useState } from 'react';

function App() {
  const [queryDescription, setQueryDescription] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', queryDescription);

    const cleanSql = sqlQuery.replace(/```sql([\s\S]*?)```/i, (m, p1) => p1.trim()) || sqlQuery;
    setSqlQuery(cleanSql);


    console.log('SQL Query returned from Server:', generatedQuery);
  };

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        queryDescription: queryDescription,
      }),
    });

    const data = await response.json();
    return data.response.trim();
  };

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="SQL Logo" className={styles.icon} />
      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>
        <input 
          type="text"
          name="query-description"
          placeholder="Describe your query"
          onChange={(e) => setQueryDescription(e.target.value)}
        />
        <input type="submit" value="Generate SQL Query" />
      </form>

      {/* this code  right below is  to display SQL result */}
      {sqlQuery && (
          <div className={styles.codeContainer}>
            <pre className={styles.codeBlock}>{sqlQuery}</pre>
            <button
              className={styles.copyButton}
              onClick={() => navigator.clipboard.writeText(sqlQuery)}
            >
              Copy
            </button>
          </div>


      )}
    </main>
  );
}

export default App;
