'use client';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  return (
    <main>
      <h1>Product ID: {params.id}</h1>
    </main>
  );
}
