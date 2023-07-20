import { NoAuthTopRate } from ".";

export const loginWithPasswordRequest = (data) => {
  return NoAuthTopRate.post("/Account/Authenticate/Password", data);
};
