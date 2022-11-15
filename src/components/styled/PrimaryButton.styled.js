import tw from "twin.macro";

const PrimaryButton = tw.button`
    flex
    flex-row
    align-items[center]
    rounded
    text-yellow-900
    font-semibold
    justify-center
    bg-yellow-300
    h-full
    w-full
    ring-2
    ring-transparent
    duration-300
    ease-in-out
    active:ring-yellow-900
    active:ease-in-out
    active:duration-300
    hover:bg-yellow-400
    gap-2
    py-2
`;
export default PrimaryButton;
