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
              href="https://docs.arcjet.com/rate-limiting/quick-start/nextjs">Rate
              limiting for Next.js</a> section.
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
        <li>
          Capture evidence of your success:
          <ul>
            <li>
              Screenshot or save a copy of the "Challenge Complete" image from
              your app
            </li>
            <li>
              Screenshot of your Arcjet dashboard showing the blocked requests
            </li>
          </ul>
        </li>
        <li>
          Share your experience on X (formerly Twitter) and/or LinkedIn:
          <ul>
            <li>
              Start your post with:
              <code>I completed the #ArcjetChallenge - can you get your shields up?
              https://challenge.arcjet.com/</code>
            </li>
            <li>
              Add something personal - what you enjoyed about the challenge,
              your experience, or thoughts on the product
            </li>
            <li>Tag @arcjethq on X (formerly Twitter)</li>
            <li>Tag Arcjet on LinkedIn</li>
          </ul>
        </li>
      </ul>
      <p>
        The personal part of your submission will be evaluated for creativity
        and originality when determining the winners!
      </p>
      <p>
        Need an idea of what the post should look like? You can see an example
        post on the <a href="https://challenge.arcjet.com/">Arcjet Security
        Challenge landing page</a>.
      </p>
    `;
  }