export default function Glow() {
  return (
    <>
      <div className="fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-green-400/20 blur-[150px] rounded-full -z-10" />

      <div className="fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-green-400/10 blur-[150px] rounded-full -z-10" />
    </>
  );
}