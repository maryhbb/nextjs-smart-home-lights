import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ lights, setAllLights, isOnCount }) {
  const setAllLightsOn = () => setAllLights(true);
  const setAllLightsOff = () => setAllLights(false);

  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        setAllLightsOn={setAllLightsOn}
        setAllLightsOff={setAllLightsOff}
        isOnCount={isOnCount}
      />
    </>
  );
}
