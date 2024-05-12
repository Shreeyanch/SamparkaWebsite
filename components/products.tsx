import type { NextPage } from "next";
import ProductCard from "./product-card";
import styles from "./products.module.css";

const Products: NextPage = () => {
  return (
    <div className={styles.products} data-scroll-to="products">
      <div className={styles.productframe}>
        <div className={styles.productdetails}>
          <div className={styles.producttitle}>
            <div className={styles.ourLineOf}>Our line of products</div>
          </div>
          <div className={styles.productsubtitle}>
            <div className={styles.heresWhatWere}>
              Here’s what we’re building to help businesses deliver amazing
              customer experiences.
            </div>
          </div>
        </div>
        <div className={styles.productscards}>
          <div className={styles.column1}>
            <ProductCard
              cardImage="/cardimage@2x.png"
              giftStand="Gift Stand"
              propHeight="15px"
              propDisplay="inline-block"
            />
            <ProductCard
              cardImage="/cardimage1@2x.png"
              giftStand="Business Card"
              propHeight="unset"
              propDisplay="unset"
            />
            <ProductCard
              cardImage="/cardimage2@2x.png"
              giftStand="Review Stand"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
