import React from "react";
import Container from "../components/Container";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import create from "../assets/doodle_create.png";
import add from "../assets/doodle_add_content.png";
import publish from "../assets/doodle_launch.png";
import { BsArrowRight, BsPlayFill, BsGridFill, BsFillHeartFill, BsStarFill, BsLightningChargeFill, BsFillShieldFill, BsArrowLeft } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import logitech from "../assets/Logitech.png";
import google from "../assets/Google.png";
import amazon from "../assets/Amazon.png";
import philips from "../assets/Philips.png";
import facebook from "../assets/Facebook.png";
import linkedin from "../assets/Linkedin.png";

function Feature() {
  return (
    <Container>
      {/* Awal We Have create */}
      <div className="font-Inter bg-biruMuda h-[800px] flex justify-start p-32 items-center">
        <div>
          <h1 className="capitalize font-bold text-biru text-6xl w-[900px]">We have created a big library of illustrations with custom style and action types.</h1>
          <p className="italic text-black w-[900px] text-2xl my-9 font-normal">
            “E-commerce Illustration Pack collects different ways to do quick shopping, pay in a second, and get all those stuff you need. There are smart delivery and polite service in the scenes. Each of them is realized in cold and warm
            colors with”
          </p>
          <div className="flex gap-6 mb-9">
            <img className="w-24 h-24 object-contain" src={image3} alt={image3} />
            <div className="h-24 flex flex-col justify-center gap-2">
              <p className="text-lg font-medium text-black">Jesica Kumari</p>
              <p className="text-base text-black font-normal">CEO Of Acme Limited</p>
            </div>
          </div>
          <button className="bg-biru w-64 h-14 flex items-center justify-center gap-1 text-white">
            Explore More About This
            <BsArrowRight className="w-5" />
          </button>
        </div>
      </div>
      {/* Akhir We Have create */}

      {/* Awal Some count */}
      <div className="w-full h-[376px] bg-biru px-32 flex justify-center items-center font-Inter">
        <div className="w-full">
          <h3 className="text-white text-[42px] font-bold text-center">Some count that matters</h3>
          <p className="text-white text-xl font-normal text-center">Our achievement in the journey depicted in numbers</p>
          <div className="flex mt-14">
            <div className="w-[300px] flex justify-center items-center border-r-2 border-white">
              <div>
                <h1 className="text-white text-center font-bold text-[52px]">5</h1>
                <p className="text-white text-lg font-normal">Service Geographics</p>
              </div>
            </div>
            <div className="w-[300px] flex justify-center items-center border-r-2 border-white">
              <div>
                <h1 className="text-white text-center font-bold text-[52px]">30</h1>
                <p className="text-white text-lg font-normal">Fortune 500 Clients</p>
              </div>
            </div>
            <div className="w-[300px] flex justify-center items-center border-r-2 border-white">
              <div>
                <h1 className="text-white text-center font-bold text-[52px]">300</h1>
                <p className="text-white text-lg font-normal">Dedicated Members</p>
              </div>
            </div>
            <div className="w-[300px] flex justify-center items-center ">
              <div>
                <h1 className="text-white text-center font-bold text-[52px]">8</h1>
                <p className="text-white text-lg font-normal">Years of Journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir Some count */}

      {/* Awal Headline of modern */}
      <div className="h-[800px] flex justify-center items-center font-Inter bg-white px-32">
        <div className="w-full flex justify-between">
          <div>
            <img className="w-[400px] h-[500px] object-cover opacity-60 mix-blend-darken fill-biru" src={image4} alt={image4} />
          </div>
          <div className="h-[500px] ">
            <h2 className="text-biru font-bold text-[52px] w-[635px]">Headline of Modern and Digital Lending Platform In a Few Seconds for You</h2>
            <p className="text-black font-normal text-xl w-[635px] my-10">
              Nowadays, it isnt uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process Gorgeous, high-quality design system for mobile, tablet & a few reasons digital
            </p>
            <div className=" flex items-center gap-4">
              <div>
                <div className="text-sm w-12 h-12 rounded-full  border-biru border-2 flex justify-center items-center">
                  <BsPlayFill />
                </div>
              </div>
              <p className="font-medium text-lg text-biru">Play Tutorial</p>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir Headline of modern */}

      {/* Awal First feature */}
      <div className="font-Inter w-full h-[900px] px-32 flex justify-center items-center text-black">
        <div className="w-full grid grid-cols-2">
          <div className="flex flex-col justify-between">
            <div className="flex gap-24">
              <div>
                <div className="text-biru text-[44px]">
                  <BsGridFill />
                </div>
                <p className="text-xl font-bold text-biru mt-4 mb-1">First Feature</p>
                <p className="text-xs font-normal w-64 ">Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons</p>
              </div>
              <div>
                <div className="text-biru text-[44px]">
                  <FaLayerGroup />
                </div>
                <p className="text-xl font-bold text-biru mt-4 mb-1">Second Feature</p>
                <p className="text-xs font-normal w-64 ">Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons</p>
              </div>
            </div>
            <div className="flex gap-24">
              <div>
                <div className="text-biru text-[44px]">
                  <BsFillHeartFill />
                </div>
                <p className="text-xl font-bold text-biru mt-4 mb-1">Third Feature</p>
                <p className="text-xs font-normal w-64 ">Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons</p>
              </div>
              <div>
                <div className="text-biru text-[44px]">
                  <BsStarFill />
                </div>
                <p className="text-xl font-bold text-biru mt-4 mb-1">Four Feature</p>
                <p className="text-xs font-normal w-64 ">Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons</p>
              </div>
            </div>
            <div className="flex gap-24">
              <div>
                <div className="text-biru text-[44px]">
                  <BsLightningChargeFill />
                </div>
                <p className="text-xl font-bold text-biru mt-4 mb-1">Fifth Feature</p>
                <p className="text-xs font-normal w-64 ">Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons</p>
              </div>
              <div>
                <div className="text-biru text-[44px]">
                  <BsFillShieldFill />
                </div>
                <p className="text-xl font-bold text-biru mt-4 mb-1">Sixth Feature</p>
                <p className="text-xs font-normal w-64 ">Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons</p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[500px] h-[627px]">
              <img className="object-cover" src={image5} alt={image5} />
            </div>
          </div>
        </div>
      </div>
      {/* Akhir First feature */}

      {/* Awal Meet Our Leadership */}
      <div className="h-[900px] w-full bg-white font-Inter text-biru px-32 flex justify-center items-center">
        <div className="w-full">
          <p className="text-2xl font-normal">Meet Our Leadership</p>
          <div className="flex justify-between mt-6">
            <h3 className="font-bold text-[42px] w-[730px]">Nowadays, it isnt uncommon to see lenders rapidly adopting a digital lending strategy to streamline </h3>
            <div className="flex gap-4 items-end justify-end">
              <div>
                <div className="flex justify-center items-center bg-biruMuda rounded-full w-16 h-16 text-3xl">
                  <BsArrowLeft />
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center bg-biruMuda rounded-full w-16 h-16 text-3xl">
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-12 justify-between">
            <div>
              <div className="bg-biruMuda w-[350px] h-[380px]"></div>
              <p className="text-2xl font-semibold mt-6 mb-1">Samuel Willson</p>
              <p className="font-medium text-xl text-black">Digital Artist</p>
            </div>
            <div>
              <div className="bg-biruMuda w-[350px] h-[380px]"></div>
              <p className="text-2xl font-semibold mt-6 mb-1">Angelina Hellhop</p>
              <p className="font-medium text-xl text-black">Digital Artist</p>
            </div>
            <div>
              <div className="bg-biruMuda w-[350px] h-[380px]"></div>
              <p className="text-2xl font-semibold mt-6 mb-1">Kyle Generale</p>
              <p className="font-medium text-xl text-black">Digital Artist</p>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir Meet Our Leadership */}

      {/* Awal How it works */}
      <div className="h-[502px] w-full flex justify-center items-center font-Inter text-biru px-32">
        <div className="w-full">
          <h3 className="font-bold text-[42px] text-center">How it works</h3>
          <div className="flex justify-around mt-12">
            <div>
              <div>
                <img className="w-52 h-auto object-contain" src={create} alt={create} />
              </div>
              <p className="font-bold text-2xl mt-4 mb-1 text-center">Create your site</p>
              <p className="text-base font-normal text-black text-center">Create an account to get started.</p>
            </div>
            <div>
              <div>
                <img className="w-52 h-auto object-contain" src={add} alt={add} />
              </div>
              <p className="font-bold text-2xl mt-4 mb-1 text-center">Add Contents</p>
              <p className="text-base font-normal text-black text-center">Add contents and pages to your site.</p>
            </div>
            <div>
              <div>
                <img className="w-52 h-auto object-contain" src={publish} alt={publish} />
              </div>
              <p className="font-bold text-2xl mt-4 mb-1 text-center">Publish</p>
              <p className="text-base font-normal text-black text-center">Now publish to make your site live!</p>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir How it works */}

      {/* Awal The Is Closing */}
      <div className="bg-biruMuda w-full h-[660px] px-32 flex justify-center items-center font-Inter">
        <div className="flex items-center flex-col">
          <h2 className="text-biru font-bold text-5xl w-[920px] text-center">The Is Closing Headline To Make A Impact For Call To Action</h2>
          <p className="text-lg text-black w-[826px] text-center mt-6">
            Nowadays, it isnt uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process nowadays, it isnt uncommon to see lenders rapidly
          </p>
          <button className="bg-biru h-14 w-48 flex items-center justify-center gap-1 text-white mt-16">
            Book A Meeting
            <BsArrowRight className="w-5" />
          </button>
          <div className="flex gap-8 p-10 border-t-2 w-full mt-11">
            <img className="w-28 object-contain" src={`${philips}`} alt={philips} />
            <img className="w-28 object-contain" src={`${logitech}`} alt={`${logitech}`} />
            <img className="object-contain w-28" src={`${amazon}`} alt={`${amazon}`} />
            <img className="object-contain w-28" src={facebook} alt={facebook} />
            <img className="w-24 object-contain" src={`${google}`} alt={`${google}`} />
            <img className="object-contain w-28" src={linkedin} alt={linkedin} />
          </div>
        </div>
      </div>

      {/* Akhir The Is Closing */}
    </Container>
  );
}

export default Feature;
