import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="text-2xl font-bold text-primary">Interactify</span>
    </Link>
  );
}
