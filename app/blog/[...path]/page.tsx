export default function Page({ params }: { params: { path: string } }) {
    const obj = {
      params,
      decoded: decodeURIComponent(params.path),
    };
    console.log(obj);
    return <div>{JSON.stringify(obj)}</div>;
  }
  