"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { RequestCard } from "@/_components/request_card";
import { RequestType } from "@/_types";

import styles from "./index.module.css";

type AllRequestsProps = {
  requests: RequestType[];
};

export function AllRequests({ requests }: AllRequestsProps) {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/requests/all/${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Toate</h1>
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
