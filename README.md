# Arcjet Security Challenges

Welcome to the Arcjet Security Challenges repository! This project contains skeleton apps for four popular web frameworks, each designed to help you learn about implementing rate limiting with Arcjet.

## Frameworks

This repository includes challenges for the following frameworks:

1. [Next.js](./nextjs)
2. [Node.js with Express](./express)
3. [Bun](./bun)
4. [SvelteKit](./sveltekit)

## The Challenge

Your mission is to implement rate limiting using Arcjet in one (or more!) of these skeleton apps. Once you've successfully implemented rate limiting, share evidence of your success on social media. If your post is part of an active competition, you might be eligible to win a prize!

## How to Participate

### 1. Clone this repository to your local machine

```sh
git clone https://github.com/arcjet/arcjet-challenges.git
```

### 2. Choose the framework you want to work with and navigate to its directory

All four example directories contain a working, idiomatic skeleton application written in TypeScript for you to build upon.

### 3. Follow the specific instructions in the README.md file within each framework's directory to set up and run the skeleton app.

1. [README for Next.js](./nextjs/README.md)
2. [README for Node.js with Express](./express/README.md)
3. [README for Bun](./bun/README.md)
4. [README for SvelteKit](./sveltekit/README.md)


### 4. Implement rate limiting using Arcjet. You can find documentation and guides at [docs.arcjet.com](https://docs.arcjet.com).

Hint: Select a low threshold so that you can trigger the rate-limiting easily, for example:

- a [fixed window](https://docs.arcjet.com/rate-limiting/algorithms#fixed-window-example) with a `window` of `60s` and a `max` of `5` requests;
- a [sliding window](https://docs.arcjet.com/rate-limiting/algorithms#sliding-window-example) with an `interval` of `60s` and a `max` of `5` requests; or
- a [token bucket](https://docs.arcjet.com/rate-limiting/algorithms#token-bucket-example) with a `capacity` of `10`, an `interval` of `60s`, and a `refillRate` of `10`.

### 5. Once you've successfully implemented rate limiting, capture evidence of your success:

- both a screenshot of the "Rate-Limit Success" page from your app;
- and a screenshot of your Arcjet dashboard showing the blocked requests.

### 6. Share your experience on X (formerly Twiiter) and/or LinkedIn:
- Start your post with the following, so we can search for it: "I completed the #ArcjetChallenge - can you get your shields up? https://challange.arcjet.com/"
- Add what you enjoyed about the challenge, how you found the experience, or what you think of the product.
- Tag [@arcjethq](https://twitter.com/arcjethq) on X (formerly Twitter)
- Tag [Arcjet](https://www.linkedin.com/company/arcjet) on LinkedIn

> 💡 Each social network post that meets the above criteria will count as an entry to the competition, and three winners will be selected based on the most creative post message. Entries are subject to, and your submission is deemed acceptance of, the [Arcjet Challenge Terms and Conditions](https://challenge.arcjet.com/terms).

## Need Help?

If you run into any issues or have questions about the challenge:

- Check out the [Arcjet documentation](https://docs.arcjet.com)
- Join our [Discord community](https://discord.gg/TPra6jqZDC) for support
- Open an issue in this repository if you think you've found a bug in the skeleton apps

## Good Luck!

We're excited to see your implementations. Happy coding, and may the best rate limiter win!

