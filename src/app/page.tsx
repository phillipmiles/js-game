'use client';

import { useEffect, useRef, useState } from 'react';
import Grid from './Grid';
import styles from './page.module.css';
import playerController from '@/player';

const Home = () => {
  const [isRunning, setIsRunning] = useState(false);
  const runInterval = useRef<ReturnType<typeof setTimeout>>();

  const onClickRun = () => {
    const run = () => {
      playerController();
    };

    if (isRunning) return;

    setIsRunning(true);
    runInterval.current = setInterval(run, 1000);
  };

  useEffect(() => {
    return () => {
      clearInterval(runInterval.current);
    };
  }, []);

  return (
    <main className={styles.main}>
      <Grid />
      <button
        className={styles.runButton}
        onClick={onClickRun}
        disabled={isRunning}
      >
        Run
      </button>
    </main>
  );
};

export default Home;
