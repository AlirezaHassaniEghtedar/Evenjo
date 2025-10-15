import { type ReactNode } from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchFaqsApi } from "../../api/fetch-faqs.api.ts";

import FAQList from "./FAQList/FAQList.tsx";
import Loading from "../../components/Loading/Loading.tsx";

import type { FAQResponseDto } from "../../dto/response/faq.dto.ts";

import styles from "./FAQ.module.css";

function FAQ(): ReactNode {
  const { data, isPending, isError, error } = useQuery<FAQResponseDto[]>({
    queryKey: ["faqs"],
    queryFn: () => fetchFaqsApi(),
  });

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <>Error: {error ? error.message : "Unexpected error."}</>;
  }

  return (
    <div className={styles.faq}>
      <div className={styles.title}>
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>
        <p>
          Explore the most common questions and detailed answers about our
          events ot concerts, and security to help guide your journey in the
          EVENJO.
        </p>
      </div>
      <FAQList items={data} />
    </div>
  );
}

export default FAQ;
