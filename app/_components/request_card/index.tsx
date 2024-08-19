import * as React from "react";
import { RequestType } from "@/_types";

import styles from "./index.module.css";

type RequestCardProps = {
  request: RequestType;
  onClick: () => void;
};

export function RequestCard({ request, onClick }: RequestCardProps) {
  return (
    <div onClick={onClick} className={styles.request__card}>
      <span className={styles.request__id}>Request title</span>
      <div className={styles.info__wrapper}>
        <div className={styles.info__row}>
          <span>
            <b>Adresa:</b> {request.address}
          </span>
        </div>
        <div className={styles.info__row}>
          <span>
            <b>Preferred deadline:</b>
          </span>
          <span className={styles.info__text}>{request.deadline}</span>
        </div>

        <div className={styles.info__row}>
          <span>
            <b>Frecventa:</b>
          </span>
          <span className={styles.info__text}>{request.serviceFreq}</span>
        </div>

        <div className={styles.info__row}>
          <span>
            <b>Suprafata:</b>
          </span>
          <span className={styles.info__text}>
            {request.propertySize}m<span className={styles.square}>2</span>
          </span>
        </div>

        <div className={styles.info__row}>
          <span>
            <b>Tip serviciu:</b>
          </span>
          <span className={styles.info__text}>{request.serviceType}</span>
        </div>

        <div className={styles.info__row}>
          <span>
            <b>Tip imobil:</b>
          </span>
          <span className={styles.info__text}>{request.propertyType}</span>
        </div>

        <div className={styles.info__row__chip}>
          <span>
            <b>Statut:</b>
          </span>
          <span className={styles.info__text__chip}>Pending</span>
        </div>
      </div>
    </div>
  );
}
