import { serverAxios } from ".";

const PREFIX_URL = "/pending";

export const getPendingStatus = async (accessToken: string): Promise<void | null> => {
  const { data } = await serverAxios.post(`${PREFIX_URL}`, {
    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
  });
  try {
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    if (data.status === 400) {
      return data.message;
    }
    throw new Error("Failed to get your pending status");
  }
};