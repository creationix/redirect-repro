export default function Page({ params }: { params: { slug: string[] } }) {
  console.log("PARAMS", params);
  console.log("DECODED", decodeURIComponent(params.slug[0]));
  return <div>{JSON.stringify(params)}</div>;
}
