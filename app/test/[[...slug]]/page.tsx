export default function Page({ params }: { params: { slug: string[] } }) {
  const obj = {
    params,
    decoded: decodeURIComponent(params.slug[0]),
  };
  console.log(obj);
  return <div>{JSON.stringify(obj)}</div>;
}
