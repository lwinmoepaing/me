import AnimateContainer from "~/components/Common/AnimateContainer/AnimateContainer";
import MetaHead from "~/components/Common/MetaHead/MetaHead";
// import SittingAnimation from "~/components/Animation/SittingAnimation/SittingAnimation";
import HeroSectionAnimation from "~/components/Animation/HeroSectionAnimation/HeroSectionAnimation";
import ButterflyAnimation from "~/components/Animation/ButterflyAnimation/ButterflyAnimation";
import SharingTextAnimation from "~/components/Animation/SharingTextAnimation/SharingTextAnimation";
import CircleBackgroundAnimation from "~/components/Animation/CircleBackgroundAnimation/CircleBackgroundAnimation";
import WaveTextAnimation from "~/components/Animation/WaveTextAnimation/WaveTextAnimation";
import WalkingWorldAnimation from "~/components/Animation/WalkingWorldAnimation/WalkingWorldAnimation";

function HomePage() {
  return (
    <>
      <MetaHead title="Home" body="Portfolio : Lwin Moe Paing (Developer)" />

      <AnimateContainer>
        <div>
          <div class="max-w-[1300px] mx-auto">
            <div class="overflow-hidden flex justify-center items-center">
              <div class="w-full min-w-[690px] mx-auto">
                <HeroSectionAnimation />
              </div>
            </div>
          </div>

          <div class="max-wrapper px-4 sm:px-8 animate-[opacity0to1_0.3s_ease-in-out]">
            <div class="max-w-[500px] mx-auto my-[3rem] text-center">
              <h1 class="text-lg my-2">
                Hello, I'm{" "}
                <span class="text-indigo-500 text-xl">Lwin Moe Paing !!</span>
              </h1>
              <h2 class="text-lg my-2">
                A{" "}
                <span class="text-indigo-500 font-bold">
                  Frontend Developer
                </span>{" "}
                with over 5 years of experience.
              </h2>
            </div>

            <div class="max-w-[960px] mx-auto ">
              <ButterflyAnimation />
            </div>
          </div>

          <div class="mx-auto">
            <div class="max-w-[400px] mx-auto">
              <SharingTextAnimation />
            </div>

            <div class="relative max-w-[1600px] mx-auto md:top-[-2.5rem]">
              <CircleBackgroundAnimation />
            </div>
          </div>

          <div class="mb-[2.5rem]">
            <WaveTextAnimation />
          </div>

          <div class="max-w-[570px] mx-auto">
            <WalkingWorldAnimation />
          </div>

          {/* <div class="max-wrapper px-4 sm:px-8 animate-[opacity0to1_0.3s_ease-in-out]">
            <div class="max-w-[580px] mx-auto">
              <SittingAnimation />
            </div>
          </div> */}
        </div>
      </AnimateContainer>
    </>
  );
}
export default HomePage;