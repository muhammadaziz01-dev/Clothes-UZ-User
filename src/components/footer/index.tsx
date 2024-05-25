import "./style.scss";


const index = () => {
    return (
        <footer className="w-full bg-gray-700">
            <div className="orginal-container">
                <div className="py-5">
                    <h1 className=" text-center">{new Date().getFullYear()} yil</h1>
                </div>
            </div>
        </footer>
    );
};

export default index;