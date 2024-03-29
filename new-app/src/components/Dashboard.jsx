import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill}
 from 'react-icons/bs'

 import 
 { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import HomeAppBar from "./FarmerHomeNavbar";
import '../assets/css/Dashboard.css';
import UserProfile from './UserProfile';

function Chart() {
     
    const data = [
        {
        //   name: 'Monday',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
        //   name: 'Tuesday',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
        //   name: 'Wednesday',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
        //   name: 'Thursday',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
        //   name: 'Friday',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
        //   name: 'Saturday',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        // {
        //   name: 'Page G',
        //   uv: 3490,
        //   pv: 4300,
        //   amt: 2100,
        // },
      ];
     

  return (
    <>
    <HomeAppBar/>
    <main className='main-container ml-64  bg-gray-900 h-screen'>
    <UserProfile/>
        <div className='main-title'>
            <h3 style={{color:"black",paddingLeft:"40px"}}><span className='text-orange-600'>WELCOME </span>Applicant</h3>
        </div>

        <div className='main-cards '>
            <div className='card ml-20 w-38'>
                <div className='card-inner'>
                    <h3>Applied Loans</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>30</h1>
            </div>
            <div className='card  ml-20 w-38'>
                <div className='card-inner '>
                    <h3>Accepted Loans</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card ml-20 w-38'>
                <div className='card-inner'>
                    <h3>Current Loans</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>5</h1>
            </div>
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div> */}
        </div>

        <div className='charts'>
            {/* <ResponsiveContainer width={500} height={500}> */}
            {/* <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            > */}
                {/* <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer> */}
 
            <ResponsiveContainer width={500} height={500}>
                <h1 style={{color:"black",paddingLeft:"40px"}} className='ml-30'><span className="text-orange-600">Loan</span>  Activities</h1>
                <br/><br/>
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer> 

            <div>
                

<div className="relative overflow-x-auto">
    <table className="w-full ml-30 mt-20 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Loan ID
                </th>
                <br></br>
                <br></br>

                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <br></br>
                <br></br>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                    status
                </th>
                <br></br>
                <br></br>
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    328673
                </th>
                <br></br>
                <br></br>
                
                <td className="px-6 py-4">
                   500000
                </td>
                <br></br>
                <br></br>
                
                <td className="px-6 py-4">
                   Yet to Pay
                </td>
                <br></br>
                <br></br>
                
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    126178
                </th>
                <br></br>
                <br></br>
                
                <td className="px-6 py-4">
                    100000
                </td>
                <br></br>
                <br></br>
                
                <td className="px-6 py-4">
                   Paid
                </td>
                <br></br>
                <br></br>
                
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    789982
                </th>
                <br></br>
                <br></br>
                
                <td className="px-6 py-4">
                   700000
                </td>
                <br></br>
                <br></br>
                
                <td className="px-6 py-4">
                    Not Paid
                </td>
                <br></br>
                <br></br>
                
            </tr>
        </tbody>
        <tfoot>
            {/* <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">3</td>
                <td class="px-6 py-3">21,000</td>
            </tr> */}
        </tfoot>
    </table>
</div>

            </div>

        </div>
    </main>
    </>
  )
}

export default Chart;