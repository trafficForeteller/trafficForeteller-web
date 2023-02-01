// eslint-disable-next-line
import {  IPostPolicy, IPostRecommender } from "../types/member";
import { serverAxios } from ".";

const PREFIX_URL = "/member";

export async function postMemberJoin(policyData: IPostPolicy, registerToken: string | undefined): Promise<void | null> {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/join`, policyData, {
      headers: { Authorization: `${registerToken}`, "Content-Type": "application/json" },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to verify your Authentication number or your phone number");
  }
}

export async function postMemberJoinRecommender(
  recommenderData: IPostRecommender,
  accessToken: string | null,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/join/recommender`, recommenderData, {
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to post recommender Data");
  }
}

export async function patchMemberEdu(eduData: object, accessToken: string | null): Promise<void | null> {
  try {
    const { data } = await serverAxios.patch(`${PREFIX_URL}/edu`, eduData, {
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to post edu Data");
  }
}

export async function patchMemberJob(jobData: object, accessToken: string | null): Promise<void | null> {
  try {
    const { data } = await serverAxios.patch(`${PREFIX_URL}/job`, jobData, {
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to post job Data");
  }
}

export async function getMemberStatus(
  accessToken: string | null,
): Promise<{ jobAccepted: string; eduAccepted: string } | undefined> {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}`, {
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    });
    if (data.status === 200) {
      return { jobAccepted: data.data.jobAccepted, eduAccepted: data.data.eduAccepted };
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to post job Data");
  }
}
