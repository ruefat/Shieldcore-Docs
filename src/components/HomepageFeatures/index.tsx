import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: (
      <>
      ShieldCore is designed with simplicity in mind. Registering and executing commands requires minimal setup,
      making it perfect for beginners and advanced developers alike. Focus on your game logic, not boilerplate code.
      </>
    ),
  },
  {
    title: 'Powerfull',
    description: (
      <>
        Built for scalability, ShieldCore supports permission guards, argument parsing, and extensibility. Create 
      complex admin systems and developer tools with just a few lines of code.
      </>
    ),
  },
  {
  title: 'Customizable',
  description: (
    <>
      Tailor ShieldCore to your game’s specific needs.
    </>
  ),
}

];

function Feature({title,  description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
