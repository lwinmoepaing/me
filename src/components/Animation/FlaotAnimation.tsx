import { createEffect, createSignal, onCleanup } from "solid-js";

function FlaotAnimation() {
  const arr = [
    "M189.8 -166.4C238.1 -141.4 264 -70.7 263.1 -0.9C262.2 68.8 234.3 137.7 186 163.2C137.7 188.7 68.8 170.8 -0.8 171.7C-70.5 172.5 -140.9 191.9 -174.9 166.4C-208.9 140.9 -206.5 70.5 -200.2 6.2C-194 -58 -184 -116 -150 -141C-116 -166 -58 -158 6.4 -164.4C70.7 -170.7 141.4 -191.4 189.8 -166.4",
    "M128.8 -121.6C161 -96.6 177 -48.3 176.4 -0.6C175.8 47.1 158.6 94.3 126.4 123.9C94.3 153.6 47.1 165.8 2.5 163.3C-42.2 160.9 -84.4 143.7 -133.2 114C-182 84.4 -237.5 42.2 -251.8 -14.3C-266 -70.7 -239.1 -141.4 -190.3 -166.4C-141.4 -191.4 -70.7 -170.7 -11.2 -159.5C48.3 -148.3 96.6 -146.6 128.8 -121.6",
    "M183.9 -185.8C232.1 -135.8 260.5 -67.9 255.8 -4.7C251.1 58.5 213.2 116.9 165.1 155.6C116.9 194.2 58.5 213.1 11.5 201.6C-35.4 190 -70.7 148 -111 109.4C-151.4 70.7 -196.7 35.4 -208 -11.3C-219.3 -58 -196.6 -116 -156.3 -166C-116 -216 -58 -258 4.9 -262.9C67.9 -267.9 135.8 -235.8 183.9 -185.8",
    "M180.1 -178.9C218.8 -141.4 225.4 -70.7 219.1 -6.2C212.9 58.2 193.8 116.4 155.1 149.1C116.4 181.8 58.2 188.9 5.9 183C-46.4 177.1 -92.9 158.2 -121 125.5C-149.2 92.9 -159.1 46.4 -153.6 5.5C-148 -35.4 -127 -70.7 -98.9 -108.2C-70.7 -145.7 -35.4 -185.4 17.7 -203C70.7 -220.7 141.4 -216.4 180.1 -178.9",
    "M128.3 -103.3C178.3 -78.3 239.1 -39.1 251.4 12.3C263.6 63.6 227.3 127.3 177.3 171.9C127.3 216.6 63.6 242.3 -3.3 245.6C-70.2 248.9 -140.5 229.8 -181.8 185.1C-223.1 140.5 -235.6 70.2 -235.2 0.4C-234.9 -69.5 -221.7 -139.1 -180.4 -164.1C-139.1 -189.1 -69.5 -169.5 -15.2 -154.3C39.1 -139.1 78.3 -128.3 128.3 -103.3",
  ];

  const [animateData, setData] = createSignal(arr[0]);
  const [index, setIndex] = createSignal(0);

  createEffect(() => {
    const path = arr[index() + 1];
    setData(path);

    const timer = setInterval(() => {
      const path = arr[index() + 1];
      setData(path);
      setIndex((prev) => {
        return prev + 1 >= arr.length - 1 ? 0 : prev + 1;
      });
    }, 2000);

    onCleanup(() => clearInterval(timer));
  });

  return (
    <div class="top-0 z-[1000] fixed w-full h-full flex justify-center items-center animate-[navBarAnimation_2s_0s_ease-in-out_forwards]">
      <svg
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="900"
        height="600"
        class="w-full h-full scale-[1.8] md:scale-[1.2]"
      >
        <g transform="translate(420.4370044186388 299.46084788335605)">
          <path
            class="transition-[all] duration-[2000ms] ease-in-out"
            d={animateData()}
            style={{ fill: "#5453a3" }}
          />
        </g>
      </svg>

      <div class="absolute backdrop-blur-md bg-white/20  dark:bg-black/40 z-100 w-full h-full" />
    </div>
  );
}

export default FlaotAnimation;