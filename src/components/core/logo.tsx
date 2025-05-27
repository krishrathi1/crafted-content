import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="text-3xl font-bold text-primary transition-colors duration-200 ease-in-out">
      Custom Writings
    </Link>
  );
}
