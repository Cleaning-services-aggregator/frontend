import { get } from "@/_utils/api/api-utils";
import { SingleRequest } from "./client-component";
import { RequestType } from "@/_types";

interface SingleRequestPageParams {
  [key: string]: string;
}

type SingleRequestPageProps = {
  params: SingleRequestPageParams;
};

async function getSingleRequest(id: string) {
  return await get<RequestType>(`/requests/${id}`);
}

export default async function SingleRequestPage({
  params,
}: SingleRequestPageProps) {
  const slug = "id";
  const singleRequestId = params[slug];

  const singleRequest = await getSingleRequest(singleRequestId);

  return <SingleRequest singleRequest={singleRequest} />;
}
