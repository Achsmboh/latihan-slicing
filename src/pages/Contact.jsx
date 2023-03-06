import React from "react";
import Container from "../components/Container";
import google2 from "../assets/Google2.png";
import amazon2 from "../assets/Amazon2.png";
import intel from "../assets/Intel.png";
import atlasian from "../assets/Atlassian.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";

function Contact() {
  return (
    <Container>
      {/* Awal Halaman1 */}
      <div className="flex justify-center items-center h-[851px] w-full text-biru font-Inter">
        <div className="w-full h-full flex items-start static">
          <div className="bg-biruMuda h-[630px] w-full flex justify-start items-center px-32">
            <div className="w-[480px]">
              <div>
                <h1 className="text-6xl font-bold mb-7">Contact Us</h1>
                <p className="font-normal text-black text-xl">If you have any questions about the subscription or are not sure which plan is right for you, contact our team and lets schedule a call.</p>
              </div>
              <div className="flex gap-8 mt-24">
                <button className="w-44 h-20 bg-biru text-white text-left px-5">
                  <p className="font-semibold text-sm">Call us</p>
                  <p className="text-base font-normal">(669) 984-9439</p>
                </button>
                <button className="w-52 h-20 border border-biru bg-white text-biru text-left px-5">
                  <p className="font-semibold text-sm">Email us</p>
                  <p className="text-base font-normal">hello@openthrive.com</p>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-32">
            <div className="flex gap-5 items-center h-full">
              <img className="w-28 object-contain" src={google2} alt={google2} />
              <img className="w-28 object-contain" src={amazon2} alt={amazon2} />
              <img className="w-24 object-contain" src={intel} alt={intel} />
              <img className="object-contain w-28" src={atlasian} alt={atlasian} />
            </div>
          </div>
          <div className="absolute bottom-0 right-32 bg-white w-[487px] h-[662px] p-8 shadow-sm">
            <h3 className="text-3xl font-semibold ">Lets Talk!</h3>
            <p className="mt-[18px] mb-10 text-lg font-normal text-gray-600 w-96">If you have any question or issues to use our product. Fill the form below. We ll help you.</p>
            <form action="">
              <div className="flex justify-between mb-6">
                <div className="flex flex-col">
                  <label className="text-black font-medium text-base" For="name">
                    Your name*
                  </label>
                  <input className="border border-gray-500 w-52 h-14 p-5" type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col">
                  <label className="text-black font-medium text-base" htmlFor="email">
                    Your email*
                  </label>
                  <input className="border border-gray-500 w-52 h-14 p-5" type="text" id="email" placeholder="Enter your email" />
                </div>
              </div>
              <div>
                <div className="flex flex-col mb-6">
                  <label className="text-black font-medium text-base" For="topic">
                    Choose topic*
                  </label>
                  <select placeholder="Select one topic" className="border border-gray-500 w-full h-14 p-5" name="topic" id="opic">
                    <option value="topic1">Topic 1</option>
                    <option value="topic2">Topic 2</option>
                    <option value="topic3">Topic 3</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-black font-medium text-base" htmlFor="message">
                  Message*
                </label>
                <textarea className="border border-gray-500 w-full p-5" name="message" id="message" cols="30" rows="10" placeholder="Write your message"></textarea>
              </div>
              <button className="mt-7 w-full h-14 bg-biru text-white text-center text-base font-semibold">Contact Us</button>
            </form>
          </div>
        </div>
      </div>

      {/* Akhir Halaman 1 */}

      {/* Awal Halaman 2 */}
      <div className="h-[800px] w-full bg-white px-32 flex justify-center items-center text-biru font-Inter">
        <div className="w-full">
          <div className="w-full grid grid-cols-2">
            <h2 className="text-[52px] font-bold text-black w-full">Our offices</h2>
            <p className="text-gray-500 text-xl font-normal w-[420px]">Amazing cities, totally tricked out offices. Explore the world of Tweakful.</p>
          </div>
          <div className="flex justify-between mt-20">
            <div>
              <img className="w-[540px] h-[280px] object-cover" src={image6} alt={image6} />
              <div className="p-8">
                <h4 className="text-3xl font-bold">Vancouver Office</h4>
                <p className="text-black font-normal text-xl mt-[10px] mb-7">1085 Homer St. Vancouver BC, Canada V6B 2X5</p>
                <p className="text-xl font-semibold">Open in Maps &rArr;</p>
              </div>
            </div>
            <div>
              <img className="w-[540px] h-[280px] object-cover" src={image7} alt={image7} />
              <div className="p-8">
                <h4 className="text-3xl font-bold">San Fransisco</h4>
                <p className="text-black font-normal text-xl mt-[10px] mb-7">1085 Homer St. Vancouver BC, Canada V6B 2X5</p>
                <p className="text-xl font-semibold">Open in Maps &rArr;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir Halaman 2 */}
    </Container>
  );
}

export default Contact;
