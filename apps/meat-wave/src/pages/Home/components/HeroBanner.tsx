import {
  HeroBanner as HeroBannerComponent,
  Typography,
} from "@monorepo-pnpm/shared/base";

function HeroBanner() {
  return (
    <HeroBannerComponent
      className={"justify-center"}
      bg="https://www.desktopbackground.org/p/2012/12/06/494950_nature-hd-wallpapers-big-size_1600x1000_h.jpg"
      ariaLabel="Hero Banner"
    >
      <HeroBannerComponent.Overlay />
      <Typography size="lg" variants="display" className="text-center">
        자연친화적인 신선한 먹거리
        <br />
        SEVEN
      </Typography>
    </HeroBannerComponent>
  );
}

export default HeroBanner;
