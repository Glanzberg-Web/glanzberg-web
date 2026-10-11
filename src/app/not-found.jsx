import Link from "next/link";
import { Eyebrow, Arrow } from "@/components/Shared";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <Eyebrow>PAGE NOT FOUND / 404</Eyebrow>
      <h1>That page took<br /><em>a different turn.</em></h1>
      <p>There’s nothing here, but there’s plenty more to explore.</p>
      <Link href="/" className="button button-dark">Back to home <Arrow /></Link>
    </section>
  );
}
