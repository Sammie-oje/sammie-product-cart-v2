{
    /*Reusable button component that collects different children and the handleClick prop. Each instance(which is just two) serves the purpose of opening and closing the modal basically, with the latter also resetting the cart state */
}
function Button({ handleClick, children }) {
    return (
        <button
            onClick={handleClick}
            className="h-14 w-full text-base text-center text-white rounded-full cursor-pointer bg-red hover:bg-[#972c0b]"
        >
            {children}
        </button>
    );
}
export default Button;
