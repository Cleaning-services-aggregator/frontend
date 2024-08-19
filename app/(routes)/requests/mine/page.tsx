import { get } from "@/_utils/api/api-utils";
import { MyRequests } from "./client-component";
import { RequestType } from "@/_types";

async function getRequests() {
  return await get<RequestType[]>("/requests");
}

export default async function RequestsPage() {
  const myRequests = await getRequests();

  const requestsWithBids = myRequests.filter(
    (request) => request.bids?.length > 0,
  );

  return <MyRequests requests={requestsWithBids} />;
}
