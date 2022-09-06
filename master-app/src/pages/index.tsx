import styles from './index.less';
import Layout from '@/layouts/layout';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Layout></Layout>
    </div>
  );
}
