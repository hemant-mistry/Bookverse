import React, { Component } from 'react';
import Navbar from '../NavbarPage/Navbar';
import './DumpQuotes.css'

export class DumpQuotes extends Component {
    static displayName = DumpQuotes.name;

    render() {
        return (
            <>
                <Navbar />
                <div className="dump-quotes-header">


                    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable AI.</h1>
                    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>


                </div>

                <div className="dump-quotes-form">

                    <form class="max-w-sm mx-auto">
                        <div class="mb-5">
                            <label for="small-input" class="label-header block mb-4 text-sm font-medium text-gray-900 dark:text-white">Enter the Book name:</label>
                            <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div class="mb-5">

                            <label for="message" class="label-header block mb-4 text-sm font-medium text-gray-900 dark:text-white">Dump your quote:</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                        </div>

                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dump it</button>
                        
                    </form>

                </div>
            </>
        );
    }
}
