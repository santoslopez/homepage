import NavigationItem from "./NavigationItem";

function NavigationBar() {
  return (
    <div className="flex flex-row flex-nowrap overflow-scroll justify-center space-x-8 pb-6 px-4 text-lg">
      <NavigationItem
        name="Home"
        link="/"
      />
      <NavigationItem
        name="Videos"
        link="/videos"
      />
      <NavigationItem
        name="Projects"
        link="/projects"
      />
    </div>
  );
}

export default NavigationBar;
