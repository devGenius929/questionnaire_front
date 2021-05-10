export const GTM_ID = process.env.GTM_ID as string;
export const GRAPHQL_URL = (process.env.NEXT_PUBLIC_GRAPHQL_URL ?? 'https://graphql.declarecerto.group/graphql') as string;

export default {
  GTM_ID,
  GRAPHQL_URL,
};
