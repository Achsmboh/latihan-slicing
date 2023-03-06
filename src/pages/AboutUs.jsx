import React from "react";
import Container from "../components/Container";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import logitech from "../assets/Logitech.png";
import google from "../assets/Google.png";
import amazon from "../assets/Amazon.png";
import philips from "../assets/Philips.png";
import facebook from "../assets/Facebook.png";
import linkedin from "../assets/Linkedin.png";
import icon1 from "../assets/icon_01.png";
import icon2 from "../assets/icon_02.png";
import icon3 from "../assets/icon_03.png";
import icon4 from "../assets/icon_04.png";
import icon5 from "../assets/icon_05.png";
import icon6 from "../assets/icon_06.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ImGoogle, ImLinkedin2, ImTwitter } from "react-icons/im";

function AboutUs() {
  return (
    <Container className="font-Inter">
      {/* Awal This Headline */}
      <div className="font-Inter bg-biruMuda h-[800px] flex justify-start p-32 items-center">
        <div>
          <h1 className="capitalize font-bold text-biru text-6xl w-[900px]">This headline is the gist of the Your whole Website That can Either Make Or Break</h1>
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
      {/* Akhir This Headline */}

      {/* Awal Solutions that */}
      <div className="w-full h-[1280px] flex justify-center items-center bg-biruMuda px-32 text-biru">
        <div className="flex flex-col w-full items-center">
          <h2 className="font-bold text-[52px] w-[730px] text-center">Solutions that connect you to your Prospects & Clients</h2>
          <div className="w-full mt-14">
            <div className="flex w-full justify-between">
              <div className="bg-white w-[350px] h-[354px] px-8 py-10">
                <div>
                  <img className="w-10 h-auto object-contain" src={icon1} alt={icon1} />
                </div>
                <p className="font-bold text-2xl mt-14 mb-4">Mobile Application</p>
                <p className="text-base font-normal">Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                <div className="flex gap-3 items-center mt-10">
                  <p className="text-base font-normal">Explore</p>
                  <BsArrowRight />
                </div>
              </div>
              <div className="bg-white w-[350px] h-[354px] px-8 py-10">
                <div>
                  <img className="w-10 h-auto object-contain" src={icon2} alt={icon2} />
                </div>
                <p className="font-bold text-2xl mt-14 mb-4">Mobile Application</p>
                <p className="text-base font-normal">Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                <div className="flex gap-3 items-center mt-10">
                  <p className="text-base font-normal">Explore</p>
                  <BsArrowRight />
                </div>
              </div>
              <div className="bg-white w-[350px] h-[354px] px-8 py-10">
                <div>
                  <img className="w-10 h-auto object-contain" src={icon3} alt={icon3} />
                </div>
                <p className="font-bold text-2xl mt-14 mb-4">Mobile Application</p>
                <p className="text-base font-normal">Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                <div className="flex gap-3 items-center mt-10">
                  <p className="text-base font-normal">Explore</p>
                  <BsArrowRight />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between mt-14">
              <div className="bg-white w-[350px] h-[354px] px-8 py-10">
                <div>
                  <img className="w-10 h-auto object-contain" src={icon4} alt={icon4} />
                </div>
                <p className="font-bold text-2xl mt-14 mb-4">Mobile Application</p>
                <p className="text-base font-normal">Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                <div className="flex gap-3 items-center mt-10">
                  <p className="text-base font-normal">Explore</p>
                  <BsArrowRight />
                </div>
              </div>
              <div className="bg-white w-[350px] h-[354px] px-8 py-10">
                <div>
                  <img className="w-10 h-auto object-contain" src={icon5} alt={icon5} />
                </div>
                <p className="font-bold text-2xl mt-14 mb-4">Mobile Application</p>
                <p className="text-base font-normal">Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                <div className="flex gap-3 items-center mt-10">
                  <p className="text-base font-normal">Explore</p>
                  <BsArrowRight />
                </div>
              </div>
              <div className="bg-white w-[350px] h-[354px] px-8 py-10">
                <div>
                  <img className="w-10 h-auto object-contain" src={icon6} alt={icon6} />
                </div>
                <p className="font-bold text-2xl mt-14 mb-4">Mobile Application</p>
                <p className="text-base font-normal">Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                <div className="flex gap-3 items-center mt-10">
                  <p className="text-base font-normal">Explore</p>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
          <button className="bg-biru h-14 w-48 flex items-center justify-center gap-1 text-white mt-16">
            Button Text
            <BsArrowRight className="w-5" />
          </button>
        </div>
      </div>
      {/* Akhir Solutions that */}

      {/* Awal Benefit of working */}
      <div className="text-black flex justify-center items-center px-32 w-full h-[600px] bg-white">
        <div className="w-full">
          <h2 className="text-[52px] font-bold">Benefits of working with us</h2>
          <div className="flex mt-10 justify-between">
            <div className="flex gap-10 justify-start items-start">
              <div>
                <div className="object-contain w-14 h-14 rounded-full bg-biruMuda flex justify-center items-center text-biru">
                  <img className="w-6 h-auto object-contain" src={icon1} alt={icon1} />
                </div>
              </div>
              <div>
                <p className="text-base font-bold">Time zones aint no thing</p>
                <p className="text-xs font-normal w-[426px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
              </div>
            </div>
            <div className="flex gap-10 justify-start items-start">
              <div>
                <div className="object-contain w-14 h-14 rounded-full bg-biruMuda flex justify-center items-center text-biru">
                  <img className="w-6 h-auto object-contain" src={icon3} alt={icon3} />
                </div>
              </div>
              <div>
                <p className="text-base font-bold">Full spectrum of services</p>
                <p className="text-xs font-normal w-[426px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
              </div>
            </div>
          </div>
          <div className="flex mt-10 justify-between">
            <div className="flex gap-10 justify-start items-start">
              <div>
                <div className="object-contain w-14 h-14 rounded-full bg-biruMuda flex justify-center items-center text-biru">
                  <img className="w-6 h-auto object-contain" src={icon5} alt={icon5} />
                </div>
              </div>
              <div>
                <p className="text-base font-bold">Impossible? Were on it</p>
                <p className="text-xs font-normal w-[426px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
              </div>
            </div>
            <div className="flex gap-10 justify-start items-start">
              <div>
                <div className="object-contain w-14 h-14 rounded-full bg-biruMuda flex justify-center items-center text-biru">
                  <img className="w-6 h-auto object-contain" src={icon6} alt={icon6} />
                </div>
              </div>
              <div>
                <p className="text-base font-bold">Flexible work terms</p>
                <p className="text-xs font-normal w-[426px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir Benefit of working */}

      {/* Awal There are smart deliveri */}
      <div className="w-full h-[600px] bg-white px-32 flex justify-center items-center text-biru">
        <div className="flex h-full items-center gap-8">
          <div>
            <div className="flex justify-center items-center bg-biruMuda rounded-full w-16 h-16 text-3xl">
              <BsArrowLeft />
            </div>
          </div>
          <img className="w-[350px] h-[405px] object-contain" src={image2} alt={image2} />
          <div className="flex flex-col justify-between h-[405px]">
            <h2 className="text-[42px] font-normal">There are smart delivery and polite service in the scenes. Each of them is realized in cold and warm colors with sky.</h2>
            <div>
              <img className="w-28 object-contain" src={logitech} alt={logitech} />
              <p className="text-2xl font-bold text-black my-1">David Gillroy</p>
              <p className="text-base font-normal text-gray-500">Digital Artist at Digital Group</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center bg-biruMuda rounded-full w-16 h-16 text-3xl">
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* Akhir There are smart deliveri */}

      {/* Awal Meet our Teammates */}
      <div className="h-[1216px] w-full px-32 flex justify-center items-center text-biru">
        <div className="w-full">
          <h2 className="font-bold text-[52px]">Meet Our Teammates</h2>
          <div className="flex justify-between mt-16">
            <div>
              <div className="bg-biruMuda h-64 w-64"></div>
              <p className="text-2xl font-semibold leading-9 mt-6 mb-1">Samuel Willson</p>
              <p className="font-medium text-black text-xl leading-7 mb-4">Digital Artist</p>
              <div className="flex gap-2">
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImLinkedin2 />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImGoogle />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImTwitter />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-biruMuda h-64 w-64"></div>
              <p className="text-2xl font-semibold leading-9 mt-6 mb-1">Angelina Hellhop</p>
              <p className="font-medium text-black text-xl leading-7 mb-4">Digital Artist</p>
              <div className="flex gap-2">
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImLinkedin2 />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImGoogle />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImTwitter />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-biruMuda h-64 w-64"></div>
              <p className="text-2xl font-semibold leading-9 mt-6 mb-1">Kyle Generale</p>
              <p className="font-medium text-black text-xl leading-7 mb-4">Digital Artist</p>
              <div className="flex gap-2">
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImLinkedin2 />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImGoogle />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImTwitter />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-biruMuda h-64 w-64"></div>
              <p className="text-2xl font-semibold leading-9 mt-6 mb-1">Joey Taylor</p>
              <p className="font-medium text-black text-xl leading-7 mb-4">Digital Artist</p>
              <div className="flex gap-2">
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImLinkedin2 />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImGoogle />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-16">
            <div>
              <div className="bg-biruMuda h-64 w-64"></div>
              <p className="text-2xl font-semibold leading-9 mt-6 mb-1">Samuel Willson</p>
              <p className="font-medium text-black text-xl leading-7 mb-4">Digital Artist</p>
              <div className="flex gap-2">
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImLinkedin2 />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImGoogle />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImTwitter />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-biruMuda h-64 w-64"></div>
              <p className="text-2xl font-semibold leading-9 mt-6 mb-1">Angelina Hellhop</p>
              <p className="font-medium text-black text-xl leading-7 mb-4">Digital Artist</p>
              <div className="flex gap-2">
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImLinkedin2 />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImGoogle />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImTwitter />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-biruMuda h-64 w-64"></div>
              <p className="text-2xl font-semibold leading-9 mt-6 mb-1">Kyle Generale</p>
              <p className="font-medium text-black text-xl leading-7 mb-4">Digital Artist</p>
              <div className="flex gap-2">
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImLinkedin2 />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImGoogle />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImTwitter />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-biruMuda h-64 w-64"></div>
              <p className="text-2xl font-semibold leading-9 mt-6 mb-1">Joey Taylor</p>
              <p className="font-medium text-black text-xl leading-7 mb-4">Digital Artist</p>
              <div className="flex gap-2">
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImLinkedin2 />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImGoogle />
                  </div>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-biruMuda flex justify-center items-center">
                    <ImTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir Meet our Teammates */}

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

export default AboutUs;
