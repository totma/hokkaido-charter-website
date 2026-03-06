import RouteDetailClient from './RouteDetailClient';

export function generateStaticParams() {
  return [{ slug: 'sapporo-city' }, { slug: 'otaru' }];
}

export default function RouteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <RouteDetailClient params={params} />;
}
