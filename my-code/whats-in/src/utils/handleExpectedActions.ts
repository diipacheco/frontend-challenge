interface ExpectedActionParams {
  type: string
  payload?: {} | undefined
}

export default ({ payload, type }: ExpectedActionParams) => {
  const actionFormat = {
    error: undefined,
    meta: undefined,
    type,
    payload,
  };

  return actionFormat;
};
