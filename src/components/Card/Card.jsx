const Card = () => {
    return (
        <div className="flex-1 shadow-lg p-5 bg-slate-100 rounded-lg">
            <h1 className="text-xl lg:text-2xl font-bold ">Here the Cart items:  </h1>
            <div className="flex justify-around py-5 font-bold text-xl items-center">
                <p>Name</p>
                <p>Price</p>
                <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white py-2 px-2 rounded-lg">Delete</button>
            </div>
        </div>
    );
};

export default Card;