import { get } from "@/_utils/api/api-utils";
import { AllRequests } from "./client-component";
import { RequestType } from "@/_types";

async function getRequests() {
  return await get<RequestType[]>("/requests");
}

export default async function RequestsPage() {
  const allRequests = await getRequests();

  const requestsWithoutBids = allRequests.filter(
    (request) => request.bids.length === 0,
  );

  return <AllRequests requests={requestsWithoutBids} />;
}
