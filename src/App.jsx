import './App.css'
import logo from './assets/lws-logo-en.svg'
import hero from './assets/hero-graphics.svg'
import avatar from './assets/avatar.png'

function App() {

  const dataset = [
    {
      class: 'Class One',
      students: [
        {
          id: '1001',
          name: 'Ahmmed',
          scores: 'A+',
          percentage: '98%',
        },
        {
          id: '1002',
          name: 'Badol',
          scores: 'A',
          percentage: '95%',
        },
        {
          id: '1003',
          name: 'chandon',
          scores: 'A+',
          percentage: '98%',
        },
        {
          id: '1004',
          name: 'Asad Mia',
          scores: 'A-',
          percentage: '90%',
        },
        {
          id: '1005',
          name: 'Rashed',
          scores: 'B+',
          percentage: '87%',
        },
        {
          id: '1006',
          name: 'Kamal',
          scores: 'A+',
          percentage: '98%',
        },
        {
          id: '1007',
          name: 'Abdullah',
          scores: 'A',
          percentage: '94%',
        },
        {
          id: '1008',
          name: 'Masud',
          scores: 'B+',
          percentage: '87%',
        },
        {
          id: '1009',
          name: 'Aman',
          scores: 'C+',
          percentage: '78%',
        },
        {
          id: '1010',
          name: 'Amdadul',
          scores: 'A+',
          percentage: '98%',
        }

      ]
    },
    {
      class: 'Class Two',
      students: [
        {
          id: '2001',
          name: 'Jubayer',
          scores: 'A+',
          percentage: '98%',
        },
        {
          id: '2002',
          name: 'Kasem',
          scores: 'A',
          percentage: '95%',
        },
        {
          id: '2003',
          name: 'rakib',
          scores: 'B+',
          percentage: '83%',
        },
        {
          id: '2004',
          name: 'Sakib Mia',
          scores: 'B-',
          percentage: '80%',
        },
        {
          id: '2005',
          name: 'Sattar',
          scores: 'B+',
          percentage: '87%',
        },
        {
          id: '2006',
          name: 'Ridoy',
          scores: 'A+',
          percentage: '98%',
        },
        {
          id: '2007',
          name: 'Jalal',
          scores: 'B+',
          percentage: '80%',
        },
        {
          id: '2008',
          name: 'Jomsed',
          scores: 'B+',
          percentage: '87%',
        },
        {
          id: '2009',
          name: 'Junayed',
          scores: 'A+',
          percentage: '98%',
        },
        {
          id: '2010',
          name: 'Jiku',
          scores: 'C+',
          percentage: '78%',
        }
      ]
    }
  ]

  return (
    <>
      {/* <!-- Navbar Starts --> */}
      <nav className="py-6">
        <div
          className="container mx-auto flex items-center justify-between gap-x-6"
        >
          {/* <!-- Logo --> */}
          <a href="/">
            <img
              className="h-[40px]"
              src={logo}
              alt="Lws"
            />
          </a>
          {/* <!-- Logo Ends --> */}
          <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#"
          >Get Admission</a
          >
        </div>
      </nav>
      {/* <!-- Navbar Ends --> */}

      {/* <!-- Begin hero --> */}
      <section
        className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]"
      >
        <div className="container">
          <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto">
            <img
              className="md:order-2 object-cover ml-auto animate-updown"
              src={hero}
              width="500px"
              height="500px"
              alt="Banner"
            />
            <div>
              <h1
                className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8"
              >
                The Future of Learning starts with students at the
                center
              </h1>
              <a
                className="px-5 py-2.5 bg-[#038C61] rounded-[44px]"
                href="#"
              >Learn More</a
              >
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      {/* <!--Begin Students table --> */}
      <section className="py-24 lg:pt-[120px] lg:pb-28">
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
              <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>
            {/* <!-- Search Box --> */}
            <form>
              <div className="flex">
                <div
                  className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]"
                >
                  <input
                    type="search"
                    id="search-dropdown"
                    className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
                    placeholder="Search by Student "
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
            {/* <!-- Search Box Ends --> */}
          </div>
          <div className="max-w-[848px] mx-auto overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#FFFFFF0D]">
                  <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">ID</th>
                  <th className="p-5 text-sm md:text-xl font-semibold text-left">Name</th>
                  <th className="p-5 text-sm md:text-xl font-semibold" >Scores</th>
                  <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- class two --> */}
                {dataset.map((v, i) =>
                  <>
                    <tr className="bg-white/5" key={'tr_' + i}>
                      <td className="p-5 text-sm md:text-xl" colSpan="4">{v.class}</td>
                    </tr>
                    {v.students.map((vi, ii) =>
                      <tr className="border-b border-[#7ECEB529]" key={'std_' + ii}>
                        <td className="p-5 text-sm md:text-xl">{ii + 1}</td>
                        <td className="p-5 text-sm md:text-xl">
                          <div className="flex space-x-3 items-center">
                            <img className="w-8 h-8" src={avatar} width="32" height="32" alt="John Smith" />
                            <span className="whitespace-nowrap">{vi.name}</span>
                          </div>
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">{vi.scores}</td>
                        <td className="p-5 text-sm md:text-xl text-center">{vi.percentage}</td>
                      </tr>
                    )}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="py-6 md:py-8">
        <div className="container mx-auto">
          <p className="text-center text-base text-gray-500">
            Copyright ©2024 | All rights reserved by Learn with Sumit
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
