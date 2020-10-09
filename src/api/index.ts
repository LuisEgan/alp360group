import Axios, { AxiosResponse } from "axios";
import { useState } from "react";

type TSendEmail = (message: string) => void;
interface IUseSendEmail {
  loading: boolean;
  error: string;
  res: AxiosResponse | undefined;
}

export const useSendEmail = (): [TSendEmail, IUseSendEmail] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [res, setRes] = useState<AxiosResponse | undefined>(undefined);

  const sendEmail = async (message: string) => {
    setLoading(true);
    try {
      const res = await Axios.post(
        `https://cleverit-sendmails.azurewebsites.net/api/sendEmail`,
        {
          personalizations: [
            {
              to: [
                {
                  email: "l@cleveritgroup.com",
                },
              ],
              subject: "Nuevo mensaje de ALP360!",
            },
          ],
          from: {
            email: "letstalk@alp360group.com",
          },
          content: [
            {
              type: "text/plain",
              value: message,
            },
          ],
          attachments: [],
        },
      );

      setRes(res);
      console.log("res: ", res);
    } catch (error) {
      console.error("error: ", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [sendEmail, { res, loading, error }];
};
