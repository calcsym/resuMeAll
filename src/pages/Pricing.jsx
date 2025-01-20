// Uses the same styles as Product
import styles from './Product.module.css';
import PageNav from '../components/PageNav';
import Sidebar from '../ui/Sidebar';

export default function Pricing() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section className="flex grow flex-col pt-0.5">
        <div>
          <Sidebar />
          <h3>
            Simple pricing.
            <br />
            Just $9/month.
          </h3>
          <p>Show the exact you want them know</p>
        </div>
      </section>
    </main>
  );
}

/*     <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
 */
