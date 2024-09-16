export default function Page({ params }: { params: { slug: string } }) {
  const obj = {
    params,
    decoded: decodeURIComponent(params.slug),
  };
  console.log(obj);
  return <div>{JSON.stringify(obj)}</div>;
}
