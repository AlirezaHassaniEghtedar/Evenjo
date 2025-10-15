import { type ReactNode, useState } from "react";

import MingcuteDownLine from "../../../icons/faq/MingcuteDownLine.tsx";
import MingcuteQuestionLine from "../../../icons/faq/MingcuteQuestionLine.tsx";
import type { FAQResponseDto } from "../../../dto/response/faq.dto.ts";

import clsx from "clsx";

import styles from "./FAQList.module.css";

type Props = {
  items: FAQResponseDto[];
};

export default function FAQList({ items }: Props): ReactNode {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((old) => (old === id ? null : id));

  return (
    <section className={styles["faq-list"]}>
      <div className={styles.list}>
        {items.length === 0 && <div>There is no item to show .</div>}
        {items.length > 0 &&
          items.map(({ id, question, answer }) => {
            const isOpen = openId === id.toString();
            const panelId = `${id}-panel`;
            const btnId = `${id}-button`;

            return (
              <article
                key={id}
                className={clsx(styles.card, isOpen && styles.open)}
              >
                <button id={btnId} onClick={() => toggle(id.toString())}>
                  <MingcuteQuestionLine />
                  <span className={styles.question}>{question}</span>
                  <MingcuteDownLine />
                </button>

                <div id={panelId} className={styles.panel}>
                  <div className={styles.answer}>{answer}</div>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
}
