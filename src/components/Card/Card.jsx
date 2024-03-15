const Card = ({ item, handleDelete }) => {
    return (
        <div>
            <div className="flex justify-around items-center *:font-bold *:text-lg space-y-2 ">
                <p>{item.title.slice(0, 8)}</p>
                <p>{item.price}</p>
                <button onClick={()=> handleDelete(item.id)} className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white py-1 px-1 rounded-lg">Delete</button>
            </div>
        </div>

    );
};

export default Card;