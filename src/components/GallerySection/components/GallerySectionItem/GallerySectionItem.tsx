import { type ReactNode } from "react";

import type { GalleryItemResponseDto } from "../../../../dto/response/gallery.dto.ts";

import styles from "./GallerySectionItem.module.css";

type Props = {
  galleryItem: GalleryItemResponseDto;
};

export default function GallerySectionItem({ galleryItem }: Props): ReactNode {
  return (
    <li className={styles["gallery-section-item"]} key={galleryItem.id}>
      <img src={galleryItem.image} alt="" />
      <div className={styles.writings}>
        <div className={styles.title}>{galleryItem.title}</div>
        <span>{galleryItem.short_description}</span>
      </div>
    </li>
  );
}
