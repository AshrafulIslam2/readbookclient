import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="max-w-[1040px] mx-auto min-w-max">
      <h1 className="text-teal-700 font-bold text-3xl text-center font-serif my-5 ">
        My Daily Blogs
      </h1>
      <div className=" grid grid-cols-2 gap-6 mb-10">
        <div className="max-w-xs p-4 shadow-2xl dark:bg-gray-900 dark:text-gray-100 rounded-none">
          <div className="flex justify-between pb-4 border-bottom"></div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Link rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-blue-400">
                  What are the different ways to manage a state in a React
                  application?
                </h3>
              </Link>
              <p className="leading-snug dark:text-gray-400">
                With React, you wont modify the UI from code directly. For
                example, you wont write commands like “disable the button”,
                “enable the button”, “show the success message”, etc. Instead,
                you will describe the UI you want to see for the different
                visual states of your component (“initial state”, “typing
                state”, “success state”), and then trigger the state changes in
                response to user input. This is similar to how designers think
                about UI.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-xs p-4 shadow-2xl dark:bg-gray-900 dark:text-gray-100 rounded-none">
          <div className="flex justify-between pb-4 border-bottom"></div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Link rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-blue-400">
                  How does prototypical inheritance work?
                </h3>
              </Link>
              <p className="leading-snug dark:text-gray-400">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the Prototype of
                an object, we use Object.getPrototypeOf and
                Object.setPrototypeOf. Nowadays, in modern language, it is being
                set using __proto__.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-xs p-4 shadow-2xl dark:bg-gray-900 dark:text-gray-100 rounded-none">
          <div className="flex justify-between pb-4 border-bottom"></div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Link rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-blue-400">
                  What is a unit test? Why should we write unit tests?
                </h3>
              </Link>
              <p className="leading-snug dark:text-gray-400">
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-xs p-4 shadow-2xl dark:bg-gray-900 dark:text-gray-100 rounded-none">
          <div className="flex justify-between pb-4 border-bottom"></div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Link rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-blue-400">
                  React vs. Angular vs. Vue?
                </h3>
              </Link>
              <p className="leading-snug dark:text-gray-400">
                Vue provides higher customizability and hence is easier to learn
                than Angular or React. Further, Vue has an overlap with Angular
                and React with respect to their functionality like the use of
                components. Hence, the transition to Vue from either of the two
                is an easy option.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
