// src/client.ts
import { createThirdwebClient } from "thirdweb";

export const client = createThirdwebClient({
    clientId: import.meta.env.VITE_Api_key_thirdweb,
});
