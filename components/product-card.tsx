import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import GoogleReviewPopUp1 from "./google-review-pop-up1";
import PortalPopup from "./portal-popup";
import styles from "./product-card.module.css";

export type ProductCardType = {
  cardImage?: string;
  giftStand?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const ProductCard: NextPage<ProductCardType> = ({
  cardImage,
  giftStand,
  propHeight,
  propDisplay,
}) => {
  const [isGoogleReviewPopUpOpen, setGoogleReviewPopUpOpen] = useState(false);
  const reviewStandStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const openGoogleReviewPopUp = useCallback(() => {
    setGoogleReviewPopUpOpen(true);
  }, []);

  const closeGoogleReviewPopUp = useCallback(() => {
    setGoogleReviewPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.productcard3}>
        <img className={styles.cardimageIcon} alt="" src={cardImage} />
        <div className={styles.text}>
          <div className={styles.titles}>
            <div className={styles.reviewStand} style={reviewStandStyle}>
              {giftStand}
            </div>
            <button className={styles.viewMore} onClick={openGoogleReviewPopUp}>
              View More
            </button>
          </div>
        </div>
      </div>
      {isGoogleReviewPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGoogleReviewPopUp}
        >
          <GoogleReviewPopUp1 onClose={closeGoogleReviewPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProductCard;
