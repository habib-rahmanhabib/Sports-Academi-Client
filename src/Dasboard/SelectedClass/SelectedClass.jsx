

const SelectedClass = () => {
    return (
        <>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               # 
                            </th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>  <p className=" btn bg-orange-200">PAY</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                      
     
                    </tbody>
                   
                </table>
            </div>

        </>
    );
};

export default SelectedClass;