"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@/_components/modal";
import { Spinner } from "@/_components/spinner";
import { Button } from "@/_components/button";
import { Input } from "@/_components/input";
import { BidPreview } from "@/_components/bid_preview";
import { useFetch } from "@/_hooks/use-fetch";
import { apiConfig } from "@/_utils/api/api-config";
import { RequestType } from "@/_types";
import { BathroomIcon } from "@/_assets/icons/bathroom";
import { KitchenIcon } from "@/_assets/icons/kitchen";
import { DeadlineIcon } from "@/_assets/icons/deadline";
import { PropertyTypeIcon } from "@/_assets/icons/property_type";

import styles from "./index.module.css";

type SingleRequestProps = {
  singleRequest: RequestType;
};

const formInitialValues = {
  amount: "",
  duration: "",
  pitchOffer: "",
};

export function SingleRequest({ singleRequest }: SingleRequestProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState(formInitialValues);

  const { isLoading, executeRequest, isSuccess } = useFetch(
    `${apiConfig.apiUrl}/bids`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  React.useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
      router.refresh();
    }
  }, [isSuccess]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    executeRequest({
      amount: formValues.amount,
      duration: formValues.duration,
      pitchOffer: formValues.pitchOffer,
      requestId: singleRequest.id,
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1>Request title</h1>
      <div className={styles.details__wrapper}>
        <div className={styles.info__row}>
          <span>
            <b>Adresa:</b> {singleRequest.address}
          </span>
        </div>

        <div className={styles.info__row}>
          <span>
            <b>Preferred deadline:</b> {singleRequest.deadline}
          </span>
        </div>

        <div className={styles.info__row}>
          <span>
            <b>Frecventa:</b> {singleRequest.serviceFreq}
          </span>
        </div>

        <div className={styles.info__row}>
          <span>
            <b>Suprafata:</b> {singleRequest.propertySize}
          </span>
        </div>

        <div className={styles.info__row}>
          <span>
            <b>Tip serviciu:</b> {singleRequest.serviceType}
          </span>
        </div>

        <div className={styles.info__row}>
          <span>
            <b>Creat:</b> {singleRequest.createdAt}
          </span>
        </div>
        <div className={styles.top__row}>
          <div className={styles.asset__wrapper}>
            <PropertyTypeIcon />
            <span className={styles.asset__text}>
              <b>{singleRequest.propertyType}</b>
            </span>
          </div>
          <div className={styles.asset__wrapper}>
            <BathroomIcon />
            <span className={styles.asset__text}>
              <b>{singleRequest.bathrooms}</b>
            </span>
          </div>
          <div className={styles.asset__wrapper}>
            <KitchenIcon />
            <span className={styles.asset__text}>
              <b>{singleRequest.kitchens}</b>
            </span>
          </div>
          <div className={styles.asset__wrapper}>
            <DeadlineIcon />
            <span className={styles.asset__text}>
              <b>{1}</b> zi
            </span>
          </div>
        </div>

        <iframe
          width="100%"
          src="https://www.youtube.com/embed/4jnzf1yj48M?si=TYb2aG18BJu-EOfZ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {singleRequest.bids.length > 0 ? (
        <>
          <h4 className={styles.bids__heading}>Oferta propusa</h4>
          <div className={styles.bid__wrapper}>
            {singleRequest.bids.map((bid) => {
              return <BidPreview bid={bid} requestId={singleRequest.id} />;
            })}
          </div>
        </>
      ) : (
        <Button onClick={handleOpen}>Propune oferta</Button>
      )}

      <Modal isOpen={isOpen} handleClose={handleClose}>
        <h3 className={styles.modal__heading}>Propune oferta</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputs__wrapper}>
            <Input
              required
              type={"text"}
              name={"amount"}
              label={"Amount"}
              value={formValues.amount}
              onChange={handleChange}
            />
            <Input
              required
              type={"text"}
              name={"duration"}
              label={"Duration"}
              value={formValues.duration}
              onChange={handleChange}
            />
            <div className={styles.input__container}>
              <label className={styles.label} htmlFor={"thoughts"}>
                Pitch offer
                <span className={styles.max__length}>(max 500 characters)</span>
              </label>
              <textarea
                required
                name={"pitchOffer"}
                rows={5}
                maxLength={500}
                className={styles.input}
                value={formValues.pitchOffer}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.button__container}>
            <Button onClick={handleClose} small transparent>
              CANCEL
            </Button>
            <div className={styles.input__wrapper}>
              <input
                type={"submit"}
                className={styles.submit__button}
                value={"CREATE"}
              />
              <Spinner isLoading={isLoading} submit />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
