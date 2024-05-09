import styles from './grid.module.css';
import * as _D from '@/data/Space';

const map1 = {
  gridSize: 7,
  playerSpawn: { x: 3, y: 1 },
  layout: [
    [
      new _D.Space('empty'),
      new _D.Space('empty'),
      new _D.Space('empty'),
      new _D.Space('empty'),
      new _D.Space('empty'),
      new _D.Space('empty'),
      new _D.Space('empty'),
    ],
    [
      new _D.Space('empty'),
      new _D.Space('floor'),
      new _D.Space('floor'),
      new _D.Space('floor'),
      new _D.Space('floor'),
      new _D.Space('floor'),
      new _D.Space('empty'),
    ],
    [
      new _D.Space('empty'),
      new _D.Space('empty'),
      new _D.Space('empty'),
      new _D.Space('empty'),
      new _D.Space('empty'),
      new _D.Space('empty'),
      new _D.Space('empty'),
    ],
  ],
};

interface SpaceRenderProps {
  type: _D.SpaceType;
  content: _D.SpaceContent;
}

const SpaceRender = ({ type, content }: SpaceRenderProps) => {
  return (
    <div className={`${styles.space} ${styles[type]}`}>
      {content === 'player' && <div className={styles.player} />}
    </div>
  );
};

const Grid = () => {
  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${map1.gridSize}, 1fr)`,
      }}
    >
      {map1.layout.map((map1y, y) => (
        <>
          {map1y.map((space, x) => (
            <SpaceRender
              key={`${x},${y}`}
              {...space}
              content={
                x === map1.playerSpawn.x && y === map1.playerSpawn.y
                  ? 'player'
                  : null
              }
            />
          ))}
        </>
      ))}
    </div>
  );
};

export default Grid;
