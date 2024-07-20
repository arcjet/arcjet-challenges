import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Arcjet Challenge!</h1>
      <Link href="/arcjet-challenge-accepted" className="button">Start Challenge</Link>
    </>
  );
}