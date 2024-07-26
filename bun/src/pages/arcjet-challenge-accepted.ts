import RateLimited from "../components/RateLimited";
import NotRateLimited from "../components/NotRateLimited";

export function ArcjetChallenge(): string {
  /**
   * Complete the challenge and use Arcjet to set the value of rateLimited to true
   * when the user has been rate limited.
   */
  // Arcjet code goes here...
  const rateLimited = false;

  // We include the correct component based on the value of rateLimited
  const content = rateLimited ? RateLimited() : NotRateLimited();

  return `
    <h1>Arcjet Challenge Accepted!</h1>
    ${content}
  `;
}
