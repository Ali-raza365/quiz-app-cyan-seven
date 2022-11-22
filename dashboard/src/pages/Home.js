import React from 'react'

function Home() {
  return (
    <>
  <div className="bg-white border-b w-full h-16 absolute top-0 left-0 flex pl-64">
    <div className="flex-1 text-sm text-gray-800 h-full flex items-center px-4 font-normal tracking-wide">
      Dashboard
    </div>
  </div>
  {/* sidebar */}
  <div className="bg-white border-r w-64 h-screen absolute top-0 left-0 overflow-y-scroll">
    {/* logo */}
    <a
      href="#"
      className="block w-full h-16 border-b flex items-center justify-center text-xl font-bold text-gray-800"
    >
      <img
        src="https://inotivate.digizu.co.uk/images/logo.png"
        className="h-8"
      />
    </a>
    {/* nav */}
    <div className="pt-4 pr-4">
      <a
        href="#"
        className="flex items-center tracking-wide font-normal text-sm h-12 text-gray-700 hover:text-black"
      >
        <svg className="w-5 h-5 fill-current mx-3" viewBox="0 0 512 512">
          <path d="m197.332031 170.667969h-160c-20.585937 0-37.332031-16.746094-37.332031-37.335938v-96c0-20.585937 16.746094-37.332031 37.332031-37.332031h160c20.589844 0 37.335938 16.746094 37.335938 37.332031v96c0 20.589844-16.746094 37.335938-37.335938 37.335938zm-160-138.667969c-2.941406 0-5.332031 2.390625-5.332031 5.332031v96c0 2.945313 2.390625 5.335938 5.332031 5.335938h160c2.945313 0 5.335938-2.390625 5.335938-5.335938v-96c0-2.941406-2.390625-5.332031-5.335938-5.332031zm0 0" />
          <path d="m197.332031 512h-160c-20.585937 0-37.332031-16.746094-37.332031-37.332031v-224c0-20.589844 16.746094-37.335938 37.332031-37.335938h160c20.589844 0 37.335938 16.746094 37.335938 37.335938v224c0 20.585937-16.746094 37.332031-37.335938 37.332031zm-160-266.667969c-2.941406 0-5.332031 2.390625-5.332031 5.335938v224c0 2.941406 2.390625 5.332031 5.332031 5.332031h160c2.945313 0 5.335938-2.390625 5.335938-5.332031v-224c0-2.945313-2.390625-5.335938-5.335938-5.335938zm0 0" />
          <path d="m474.667969 512h-160c-20.589844 0-37.335938-16.746094-37.335938-37.332031v-96c0-20.589844 16.746094-37.335938 37.335938-37.335938h160c20.585937 0 37.332031 16.746094 37.332031 37.335938v96c0 20.585937-16.746094 37.332031-37.332031 37.332031zm-160-138.667969c-2.945313 0-5.335938 2.390625-5.335938 5.335938v96c0 2.941406 2.390625 5.332031 5.335938 5.332031h160c2.941406 0 5.332031-2.390625 5.332031-5.332031v-96c0-2.945313-2.390625-5.335938-5.332031-5.335938zm0 0" />
          <path d="m474.667969 298.667969h-160c-20.589844 0-37.335938-16.746094-37.335938-37.335938v-224c0-20.585937 16.746094-37.332031 37.335938-37.332031h160c20.585937 0 37.332031 16.746094 37.332031 37.332031v224c0 20.589844-16.746094 37.335938-37.332031 37.335938zm-160-266.667969c-2.945313 0-5.335938 2.390625-5.335938 5.332031v224c0 2.945313 2.390625 5.335938 5.335938 5.335938h160c2.941406 0 5.332031-2.390625 5.332031-5.335938v-224c0-2.941406-2.390625-5.332031-5.332031-5.332031zm0 0" />
        </svg>
        Dashboard
      </a>
      <a
        href="#"
        className="flex items-center tracking-wide font-normal text-sm h-12 hover:text-white  hover:bg-primaryColor rounded-r-lg my-2 hover:shadow-xl"
      >
        <svg className="w-5 h-5 fill-current mx-3" viewBox="-21 0 512 512">
          <path d="m389.332031 160c-44.09375 0-80-35.882812-80-80s35.90625-80 80-80c44.097657 0 80 35.882812 80 80s-35.902343 80-80 80zm0-128c-26.453125 0-48 21.523438-48 48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0" />
          <path d="m389.332031 512c-44.09375 0-80-35.882812-80-80s35.90625-80 80-80c44.097657 0 80 35.882812 80 80s-35.902343 80-80 80zm0-128c-26.453125 0-48 21.523438-48 48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0" />
          <path d="m80 336c-44.097656 0-80-35.882812-80-80s35.902344-80 80-80 80 35.882812 80 80-35.902344 80-80 80zm0-128c-26.453125 0-48 21.523438-48 48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0" />
          <path d="m135.703125 240.425781c-5.570313 0-10.988281-2.902343-13.910156-8.0625-4.375-7.679687-1.707031-17.453125 5.972656-21.824219l197.953125-112.855468c7.65625-4.414063 17.449219-1.726563 21.800781 5.976562 4.375 7.679688 1.707031 17.449219-5.972656 21.824219l-197.953125 112.851563c-2.496094 1.40625-5.203125 2.089843-7.890625 2.089843zm0 0" />
          <path d="m333.632812 416.425781c-2.6875 0-5.398437-.683593-7.894531-2.109375l-197.953125-112.855468c-7.679687-4.371094-10.34375-14.144532-5.972656-21.824219 4.351562-7.699219 14.125-10.367188 21.804688-5.972657l197.949218 112.851563c7.679688 4.375 10.347656 14.144531 5.976563 21.824219-2.945313 5.183594-8.363281 8.085937-13.910157 8.085937zm0 0" />
        </svg>
        Incentives
      </a>
      <a
        href="#"
        className="flex items-center text-gray-700 tracking-wide font-normal text-sm h-12 hover:text-black"
      >
        <svg className="w-5 h-5 fill-current mx-3" viewBox="-43 0 512 512">
          <path d="m16 512c-8.832031 0-16-7.167969-16-16v-480c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v480c0 8.832031-7.167969 16-16 16zm0 0" />
          <path d="m240 277.332031h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c2.945312 0 5.332031-2.386719 5.332031-5.332031v-202.667969c0-2.941406-2.386719-5.332031-5.332031-5.332031h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c20.585938 0 37.332031 16.746094 37.332031 37.332031v202.667969c0 20.585938-16.746093 37.332031-37.332031 37.332031zm0 0" />
          <path d="m389.332031 362.667969h-213.332031c-20.585938 0-37.332031-16.746094-37.332031-37.335938v-64c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v64c0 2.902344 2.429687 5.335938 5.332031 5.335938h213.332031c2.902344 0 5.335938-2.433594 5.335938-5.335938v-202.664062c0-2.902344-2.433594-5.335938-5.335938-5.335938h-128c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h128c20.589844 0 37.335938 16.746094 37.335938 37.335938v202.664062c0 20.589844-16.746094 37.335938-37.335938 37.335938zm0 0" />
        </svg>
        Customers
      </a>
     
    
   
    
     
    </div>
  </div>
  {/* body */}
  <div className="w-full min-h-screen bg-gray-100 pt-16 pl-64">
    <div className="p-8 text-sm text-gray-800">
      <h1 className="text-4xl text-gray-700 font-bold leading-none mb-8">
        Parkway Incentive
      </h1>
      <table className="border w-full text-left shadow-sm">
        <thead>
          <tr>
            <th className="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide" />
            <th className="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
              Customer
            </th>
            <th className="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
              Member
            </th>
            <th className="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide" />
          </tr>
        </thead>
        <tbody className="border rounded bg-white">
          <tr>
            <td className="p-3 border" width="50px" />
            <td className="p-3 border">John Smith</td>
            <td className="p-3 border">Terry Jones</td>
            <td className="p-3 border" />
          </tr>
          <tr>
            <td className="p-3 border" />
            <td className="p-3 border">John Smith</td>
            <td className="p-3 border">Terry Jones</td>
            <td className="p-3 border" />
          </tr>
          <tr>
            <td className="p-3 border" />
            <td className="p-3 border">John Smith</td>
            <td className="p-3 border">Terry Jones</td>
            <td className="p-3 border" />
          </tr>
          <tr>
            <td className="p-3 border" />
            <td className="p-3 border">John Smith</td>
            <td className="p-3 border">Terry Jones</td>
            <td className="p-3 border" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</>
 )
}

export default Home