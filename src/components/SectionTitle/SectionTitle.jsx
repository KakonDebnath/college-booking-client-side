
const SectionTitle = ({ children }) => {
    return (
        <div className="flex justify-center my-2 md:my-5 ">
            <div className="bg-gray-300 py-2 px-5 rounded-t-2xl">
                <h1 className="text-background text-lg md:text-3xl py-3 md:py-5 font-bold" >{children}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;