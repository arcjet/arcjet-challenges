import Image from "next/image";

export default function RateLimited() {
  return (
    <>
      <div className="success">
        <Image src="/success.png" alt="Rate Limited" width={540} height={280} />
      </div>
      <ul>
        <li>
          Capture evidence of your success:
          <ul>
            <li>Screenshot or save the image above.</li>
            <li>
              Switch back to your Arcjet dashboard - you should see the requests
              being blocked. Screenshot this as well.
            </li>
          </ul>
        </li>
        <li>
          Share your experience on X (formerly Twitter) and/or LinkedIn:
          <ul>
            <li>
              Start your post with:{" "}
              <code>
                I completed the #ArcjetChallenge - can you get your shields up?
                https://challenge.arcjet.com/
              </code>
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
        post on the{" "}
        <a href="https://challenge.arcjet.com/">
          Arcjet Security Challenge landing page
        </a>
        .
      </p>
    </>
  );
}
