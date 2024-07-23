# 🛡️ Arcjet Security Challenges

Welcome to the Arcjet Security Challenges repository! This project contains skeleton apps for four popular web frameworks, each designed to help you learn about implementing rate limiting with Arcjet.

## 🖥️ Frameworks

This repository includes challenges for the following frameworks:

1. [Next.js](./nextjs)
2. [Node.js with Express](./express)
3. [Bun](./bun)
4. [SvelteKit](./sveltekit)

## 🎯 The Challenge

Your mission is to implement rate limiting using Arcjet in one (or more!) of these skeleton apps. Once you've successfully implemented rate limiting, share evidence of your success on social media. If your post is part of an active competition, you might be eligible to win a prize!

## 🚀 How to Participate

### 1. Clone this repository to your local machine

```sh
git clone https://github.com/arcjet/arcjet-challenges.git
```

### 2. Choose your framework

All four example directories contain a working, idiomatic skeleton application written in TypeScript for you to build upon.

### 3. Set up the skeleton app

Follow the specific instructions in the `README.md` file within each framework's directory:

- [README for Next.js](./nextjs/README.md)
- [README for Node.js with Express](./express/README.md)
- [README for Bun](./bun/README.md)
- [README for SvelteKit](./sveltekit/README.md)

### 4. Implement rate limiting

- [Sign up for a free Arcjet account](https://app.arcjet.com/)
- Use our [documentation and guides](https://docs.arcjet.com)

> 💡 **Hint:** Select a low threshold to easily trigger rate-limiting. For example:
> - [Fixed window](https://docs.arcjet.com/rate-limiting/algorithms#fixed-window-example) with a `window` of `60s` and a `max` of `5` requests
> - [Sliding window](https://docs.arcjet.com/rate-limiting/algorithms#sliding-window-example) with an `interval` of `60s` and a `max` of `5` requests
> - [Token bucket](https://docs.arcjet.com/rate-limiting/algorithms#token-bucket-example) with a `capacity` of `10`, an `interval` of `60s`, and a `refillRate` of `10`

### 5. Capture your success

Get both:
- A screenshot of the "Rate-Limit Success" page from your app
- A screenshot of your Arcjet dashboard showing the blocked requests

### 6. Share your experience

Post on X (formerly Twitter) and LinkedIn:
- Start with: "I completed the #ArcjetChallenge - can you get your shields up? https://challange.arcjet.com/"
- Add what you enjoyed about the challenge, your experience, or thoughts on the product
- Tag [@arcjethq](https://twitter.com/arcjethq) on X (formerly Twitter)
- Tag [Arcjet](https://www.linkedin.com/company/arcjet) on LinkedIn

> ⚖️ Each qualifying post counts as a competition entry. Three winners will be selected based on post creativity. Entries are subject to the [Arcjet Challenge Terms and Conditions](https://challenge.arcjet.com/terms).

### 7. Share feedback (optional)

We value your insights! 📣 Help shape the future of Arcjet:

🔗 [Take our quick survey](https://forms.gle/hn8uWDNjsPeX9Dx18) to share your challenge experience, product feedback, and potentially become an Arcjet ambassador. Your input directly influences our roadmap and community initiatives. Plus, you might get early access to exciting new features!

**Time:** ~5 minutes | **Impact:** Immeasurable 🚀

## 🆘 Need Help?

If you run into issues or have questions:

- Check the [Arcjet documentation](https://docs.arcjet.com)
- Join our [Discord community](https://discord.gg/TPra6jqZDC) for support
- Open an issue in this repository for potential bugs in the skeleton apps

## 🍀 Good Luck!

We're excited to see your implementations. Happy coding, and may the best rate limiter win!