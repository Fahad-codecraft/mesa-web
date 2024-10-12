import Image from "next/image";

export default function Loading() {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <Image src="/logo.webp" height={100} width={120} alt="logo" className="loaderImage"/>
      </div>
    </div>
  )
}