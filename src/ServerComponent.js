export async function ServerComponent() {

  const beforeTime = new Date();

  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  const afterTime = new Date();
  return (
    <>
      <div>Before: {beforeTime.toUTCString()}</div>
      <div>After: {afterTime.toUTCString()}</div>
    </>
  );
}
