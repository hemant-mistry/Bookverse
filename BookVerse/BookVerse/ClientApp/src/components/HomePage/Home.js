import React, { Component } from 'react';
import { Navbar } from '../NavbarPage/Navbar';
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;

    render() {

        const topUsers = [
            { name: "User1", profilePic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" },
            { name: "User2", profilePic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" },
            { name: "User3", profilePic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" },
            { name: "User4", profilePic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" },
            { name: "User5", profilePic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" }
        ];
        return (
            <div className="bg-black text-white flex flex-col min-h-screen">
                <Navbar />
                <hr className="h-px my-0 bg-gray-200 border-0 dark:bg-white-700" />

                <div className="header-section">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">Bookverse: Collect and  <span className="text-blue-500">Share</span> Your Favorite Literary Gems.</h1>
                    <p className="text-lg font-normal lg:text-xl">Discover, Capture, and Share the Most Memorable Quotes from Your Beloved Books</p>
                    <br></br>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { window.location.href = '/dump-quotes'; }}>Dump quotes</button>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-white-700" />
                <div className="container mx-auto flex flex-col lg:flex-row justify-between">
                    <div className="lg:w-1/4">
                        <div className="filter-section flex flex-col items-start justify-center ">
                            <h2 className="text-lg font-semibold mb-4">Genres</h2>
                            <div className="space-y-2">
                                <div class="flex items-center mb-4">
                                    <input id="fiction-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="fiction-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fiction</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="non-fiction-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="non-fiction-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non-Fiction</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="romance-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="romance-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Romance</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="romance-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="romance-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Crime Thriller</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="romance-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="romance-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mystery</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="romance-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="romance-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Biographies</label>
                                </div>
                                {/* Add more genre checkboxes as needed */}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 px-4">
                        <div className="cards-section flex flex-col items-center">
                            <h1 className="text-3xl font-semibold mb-0">Recent Dumps</h1>
                            <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-white-700" />
                            <div className="dump-cards">
                                {/* First Dump Card */}
                                <div className="relative flex w-full max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-none mb-4">
                                    <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 pl-5 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                                        <img
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                            alt="Tania Andrew"
                                            className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
                                        />
                                        <div className="flex w-full flex-col gap-0.5">
                                            <div className="flex items-center justify-between">
                                                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                                    Tania Andrew
                                                </h5>
                                            </div>
                                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                                                Frontend Lead @ Google
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pl-5 mb-6">
                                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                            "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex w-full max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-none mb-4">
                                    <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 pl-5 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                                        <img
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                            alt="Tania Andrew"
                                            className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
                                        />
                                        <div className="flex w-full flex-col gap-0.5">
                                            <div className="flex items-center justify-between">
                                                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                                    Tania Andrew
                                                </h5>
                                            </div>
                                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                                                Frontend Lead @ Google
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pl-5 mb-6">
                                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                            "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
                                        </p>
                                    </div>
                                </div>
                                 <div className="relative flex w-full max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-none mb-4">
                                    <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 pl-5 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                                        <img
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                            alt="Tania Andrew"
                                            className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
                                        />
                                        <div className="flex w-full flex-col gap-0.5">
                                            <div className="flex items-center justify-between">
                                                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                                    Tania Andrew
                                                </h5>
                                            </div>
                                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                                                Frontend Lead @ Google
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pl-5 mb-6">
                                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                            "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
                                        </p>
                                    </div>
                                </div>
                                {/* Add more dump cards as needed */}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4">
                        <div className="top-users-panel">
                            <h2 className="text-lg font-semibold mb-4">Top Users</h2>
                            {topUsers.map((user, index) => (
                                <div key={index} className="flex items-center mb-4">
                                    <img src={user.profilePic} alt={user.name} className="w-8 h-8 rounded-full" />
                                    <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tania Andrew
</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Home;
