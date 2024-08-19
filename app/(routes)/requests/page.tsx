import { get } from "@/_utils/api/api-utils";
import { Requests } from "./client-component";
import { RequestType } from "@/_types";

async function getRequests() {
  return await get<RequestType[]>("/requests");
}

export default async function RequestsPage() {
  const requests = await getRequests();

  const requestsWithoutBids = requests.filter(
    (request) => request.bids?.length === 0,
  );

  return <Requests requests={requestsWithoutBids} />;
}
