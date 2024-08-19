"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { RequestType } from "@/_types";

import styles from "./index.module.css";
import { RequestCard } from "@/_components/request_card";

type RequestsProps = {
  requests: RequestType[];
};

export function Requests({ requests }: RequestsProps) {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/requests/${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Cereri</h1>
      <div className={styles.requests__wrapper}>
        {requests.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            onClick={() => handleClick(request.id)}
          />
        ))}
      </div>
    </div>
  );
}
