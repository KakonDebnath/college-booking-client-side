import Button from "../../components/Shared/Button/Button";


const ErrorPage = () => {
    return (
        <>
            <div className="flex justify-center items-center gap-5 py-20">
                <h4 className="text-orange-400 text-7xl"> 404 </h4> |
                <h4 className="text-3xl">Page not found</h4>
            </div>
            <div className="flex justify-center">
                <Button path={"/"}>Back To Home</Button>
            </div>
        </>
    );
};

export default ErrorPage;