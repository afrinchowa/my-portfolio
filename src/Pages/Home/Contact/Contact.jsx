const Contact = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-20 mb-20">
        Contact<span className="text-[#49d9d3]"> me</span>
      </h1>
      <div className="flex justify-between">
        <div className="p-10 w-1/2">
          <h1 className="text-3xl text-[#49d9d3] font-bold">
            Lets Work Together
          </h1>
          <p className="text-xl mt-5">
            Are you interested in collaborating on a project or seeking
            assistance with a creative endeavor? Im thrilled to hear from you!
            Feel free to reach out via email or connect with me on social media:
          </p>
          <p className="text-lg font-semibold mt-5">
            I am open to discussing various opportunities, including:
          </p>
          <ul>
            <li>Content creation</li>
            <li>Copywriting</li>
            <li>Consulting</li>
            <li>Collaboration on research projects</li>
            <li>Speaking engagements</li>
          </ul>
          And more! Lets bring our ideas together and create something
          extraordinary! Looking forward to hearing from you soon!
        </div>
        <div className="p-10 w-1/2 ">
          <div className="bg-transparent py-8 ">
            <div className="max-w-md mx-auto px-4 ">
              
              <form
                id="contact-form"
                method="post"
                action="send_message.php"
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block font-medium text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#49d9d3]  text-white py-2 px-4 rounded-md hover:bg-[#0a1d29] transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
