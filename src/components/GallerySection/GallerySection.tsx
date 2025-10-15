import { type ReactNode } from "react";

import useGalleryQuery from "../../queries/use-gallery.query.ts";

import Loading from "../Loading/Loading.tsx";

import GallerySectionItem from "./components/GallerySectionItem/GallerySectionItem.tsx";

import styles from "./GallerySection.module.css";

export default function GallerySection(): ReactNode {
  const { data: galleryItems, isPending, isError, error } = useGalleryQuery();

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <>Error: {error ? error.message : "Unexpected error."}</>;
  }

  if (galleryItems.length === 0) {
    return <div className={styles["no-data"]}>There is no data .</div>;
  }

  return (
    <div className={styles["gallery-section"]}>
      <div className={styles["title-section"]}>
        <h2>Top singers</h2>
        <span>
          Find the singers you're looking for quickly. You can see more.
        </span>
      </div>
      <ul>
        {galleryItems.map((item) => (
          <GallerySectionItem galleryItem={item} />
        ))}
      </ul>
    </div>
  );
}
