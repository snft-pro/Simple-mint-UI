import { createThirdwebClient } from 'thirdweb';

const clientId = "17dd24b8c6e32b45221b8d644726bd2b";

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});
