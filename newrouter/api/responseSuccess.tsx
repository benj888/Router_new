export const responseSuccess = (response: { status: number }) => {
    return [200,201,204].includes(response?.status)
  };