import Image from "next/image";

export default function RateLimited() {
  return (
    <>
      <div className="success">
        <Image src="/success.png" alt="Rate Limited" width={540} height={280} />
      </div>
    </>
  );
}
