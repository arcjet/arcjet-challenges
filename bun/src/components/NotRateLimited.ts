export default function NotRateLimited(): string {
    return `
      <h2>Not Rate Limited</h2>
      <p>You need to implement rate-limiting with Arcjet.</p>
      <h3>Instructions</h3>
      <ul>
        <li>
          <a href="https://app.arcjet.com/" target="_blank" rel="noopener noreferrer"
          aria-label="Sign up for a free Arcjet account - opens in a new window">Sign
          up for a free Arcjet account</a>
        </li>
        <li>
          Edit <code>src/pages/arcjet-challenge-accepted.ts</code> and
          implement Arcjet rate-limit protection by setting the value of
          <code>rateLimited</code> to <code>true</code> when appropriate
          <ul>
            <li>
              Use our <a href="https://docs.arcjet.com/">documentation</a> to
              help you get started, in particular, the <a
              href="https://docs.arcjet.com/rate-limiting/quick-start/bun">Rate
              limiting for Bun</a> section.
            </li>
            <li>
              Tip: Select a low threshold to easily trigger rate-limiting. For
              example a <code>window</code> or <code>interval</code> of
              <code>60s</code> and a <code>max</code> of <code>5</code>
              requests.
            </li>
          </ul>
        </li>
        <li>
          Trigger rate limiting by refreshing this page until you reach your
          defined max number of requests
        </li>
      </ul>
    `;
  }