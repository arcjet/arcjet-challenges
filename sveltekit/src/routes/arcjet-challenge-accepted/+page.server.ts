import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  /**
   * Complete the challenge and use Arcjet to set the value of rateLimited to true
   * when the user has been rate limited.
   */
  // Arcjet code goes here...

  const rateLimited = false;

  return { rateLimited };
};
