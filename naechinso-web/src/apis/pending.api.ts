// eslint-disable-next-line
import { IGetPending } from "../types/pending";
import { serverAxios } from ".";

const PREFIX_URL = "/pending";

export const getPendingStatus = async (accessToken: string | null): Promise<IGetPending[]> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}`, {
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    });
    return data.data;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to get your pending status");
  }
};
