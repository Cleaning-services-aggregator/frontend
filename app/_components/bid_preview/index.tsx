import * as React from "react";
import { BidType } from "@/_types";
import { Modal } from "@/_components/modal";
import { Input } from "@/_components/input";
import { Button } from "@/_components/button";
import { Spinner } from "@/_components/spinner";
import { EditIcon } from "@/_assets/icons/edit";
import { useFetch } from "@/_hooks/use-fetch";
import { apiConfig } from "@/_utils/api/api-config";

import styles from "./index.module.css";
import { useRouter } from "next/navigation";

type BidPreviewPropsType = {
  bid: BidType;
  requestId: string;
};

export function BidPreview({ bid, requestId }: BidPreviewPropsType) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    amount: "",
    duration: "",
    pitchOffer: "",
  });

  React.useEffect(() => {
    setFormValues({
      amount: bid.amount,
      duration: bid.duration,
      pitchOffer: bid.pitchOffer,
    });
  }, [bid]);

  const { isLoading, executeRequest, isSuccess } = useFetch(
    `${apiConfig.apiUrl}/bids/${bid.id}`,
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
      requestId,
    });
  };

  return (
    <div className={styles.bid__details__wrapper}>
      <div className={styles.bid__detail}>
        Amount:
        <span>{bid.amount} lei</span>
      </div>
      <div className={styles.bid__detail}>
        Duration: <span>{bid.duration} ore</span>
      </div>
      <div className={styles.bid__detail}>
        Pitch offer: <span>{bid.pitchOffer}</span>
      </div>

      <div className={styles.edit__button} onClick={handleOpen}>
        <EditIcon />
      </div>

      <Modal isOpen={isOpen} handleClose={handleClose}>
        <h3 className={styles.modal__heading}>Editeaza oferta</h3>
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
                value={"UPDATE"}
              />
              <Spinner isLoading={isLoading} submit />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
