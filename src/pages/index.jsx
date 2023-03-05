import "../styles/App.css";
import Container from "../components/Container";
import image1 from "../assets/image1.png";
import logitech from "../assets/Logitech.png";
import google from "../assets/Google.png";
import amazon from "../assets/Amazon.png";
import philips from "../assets/Philips.png";
import facebook from "../assets/Facebook.png";
import linkedin from "../assets/Linkedin.png";
import { BsArrowRight, BsGridFill, BsFillStarFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import icon1 from "../assets/icon_01.png";
import icon3 from "../assets/icon_03.png";
import icon5 from "../assets/icon_05.png";
import icon6 from "../assets/icon_06.png";
import image2 from "../assets/image2.png";

function Home() {
  return (
    <Container>
      {/* Awal This Headline */}
      <div className={`h-[840px] text-biru  bg-white flex justify-center items-center w-full font-Inter px-32`}>
        <div className="grid grid-cols-2 w-full">
          <div className="pr-12">
            <h1 className="text-5xl font-bold capitalize">This headline is the gist of the Your whole Website </h1>
            <p className={`mt-7 mb-11 w-[468px]`}>And the description of hero section is follow up message after the punch of a great headline. So, make it short, simple, descriptive and to the point.</p>
            <div className="flex gap-5 mb-20">
              <button className="bg-biru w-48 flex items-center justify-center gap-1 text-white">
                Book A Meeting
                <BsArrowRight className="w-5" />
              </button>
              <p className="w-60">Here you can put secondary action statement & CTA</p>
            </div>
            <div className="flex gap-5">
              <img className="w-28 object-contain" src={`${logitech}`} alt={`${logitech}`} />
              <img className="w-24 object-contain" src={`${google}`} alt={`${google}`} />
              <img className="object-contain w-28" src={`${amazon}`} alt={`${amazon}`} />
            </div>
          </div>
          <div className=" flex items-start w-full justify-end">
            <img className="w-96 object-contain" src={`${image1}`} alt={`${image1}`} />
          </div>
        </div>
      </div>
      {/* Akhir This Headline */}

      {/* Awal First Benefit */}
      <div className="w-full h-[650px]  flex justify-center items-center px-32 font-Inter">
        <div className="grid grid-cols-2 w-full">
          <div className=" pr-52">
            <div className="flex gap-6 items-start">
              <div>
                <div className="object-contain w-14 h-14 rounded-full bg-biruMuda flex justify-center items-center text-biru">
                  <BsGridFill />
                </div>
              </div>
              <div>
                <p className="text-xl font-bold text-biru mb-2">First Benefit</p>
                <p className="text-sm text-black">Gorgeous, high-quality design system for mobile, tablet & desktop devices a few</p>
              </div>
            </div>
            <div className="flex gap-6 items-start my-12">
              <div>
                <div className="object-contain w-14 h-14 rounded-full bg-biruMuda flex justify-center items-center text-biru">
                  <BsFillStarFill />
                </div>
              </div>
              <div>
                <p className="text-xl font-bold text-biru mb-2">Second Benefit</p>
                <p className="text-sm text-black">Gorgeous, high-quality design system for mobile, tablet & desktop devices a few</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div>
                <div className="object-contain w-14 h-14 rounded-full bg-biruMuda flex justify-center items-center text-biru">
                  <FaLayerGroup />
                </div>
              </div>
              <div>
                <p className="text-xl font-bold text-biru mb-2">Third Benefit</p>
                <p className="text-sm text-black">Gorgeous, high-quality design system for mobile, tablet & desktop devices a few</p>
              </div>
            </div>
          </div>
          <div className=" pr-4">
            <h1 className="text-biru text-5xl font-bold">Headline of Modern and Digital Lending Platform Seconds</h1>
            <p className="text-xl text-black mt-4 mb-7 w-[445px]">Nowadays, it isn t uncommon to see lenders rapidly adopting a digital lending strategy</p>
            <button className="bg-biru h-14 w-48 flex items-center justify-center gap-1 text-white">
              Book A Meeting
              <BsArrowRight className="w-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Akhir First Benefit */}

      {/* Awal Benefits of working */}
      <div className="w-full h-[600px] flex justify-center items-center px-32 font-Inter ">
        <div className=" w-full ">
          <h2 className="font-bold text-biru text-5xl">Benefits of working with us</h2>
          <div className="grid grid-cols-2 mt-9">
            <div className="flex gap-6 items-start">
              <div>
                <div className="object-contain w-14 h-14 rounded-full bg-biruMuda flex justify-center items-center text-biru">
                  <img className="w-6 h-auto object-contain" src={icon1} alt={icon1} />
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-biru mb-2">Time zones aint no thing</p>
                <p className="text-sm text-black pr-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div>
                <div className="object-contain w-14 h-14 rounded-full bg-biruMuda flex justify-center items-center text-biru">
                  <img className="w-6 h-auto object-contain" src={icon3} alt={icon3} />
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-biru mb-2">Full spectrum of services</p>
                <p className="text-sm text-black pr-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-12">
            <div className="flex gap-6 items-start">
              <div>
                <div className="object-contain w-14 h-14 rounded-full bg-biruMuda flex justify-center items-center text-biru">
                  <img className="w-6 h-auto object-contain" src={icon5} alt={icon5} />
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-biru mb-2">Impossible? We re on it</p>
                <p className="text-sm text-black pr-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div>
                <div className="object-contain w-14 h-14 rounded-full bg-biruMuda flex justify-center items-center text-biru">
                  <img className="w-6 h-auto object-contain" src={icon6} alt={icon6} />
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-biru mb-2">Flexible work terms</p>
                <p className="text-sm text-black pr-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir Benefits of working */}

      {/* Awal Success Story */}
      <div className="bg-white h-[930px] px-32 flex justify-center items-center font-Inter">
        <div className="w-full h-[700px] bg-biruMuda flex">
          <div className="flex items-center">
            <div className="h-[420px] pl-24 flex flex-col justify-between">
              <h3 className="text-biru font-bold text-4xl">Success Story</h3>
              <p className="text-black text-4xl w-[480px]">Nowadays, it isnt uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process</p>
              <div>
                <img className="w-28 object-contain" src={`${logitech}`} alt={`${logitech}`} />
                <div className="flex mt-3">
                  <p className="text-biru text-xs">Read Complete Case Study</p>
                  <BsArrowRight className="w-5 text-biru" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <img className="w-[380px] h-[420px] object-contain" src={image2} alt={image2} />
          </div>
        </div>
      </div>
      {/* Akhir Success Story */}

      {/* Awal The process we follow */}
      <div className="w-full h-96 bg-white px-32 font-Inter">
        <div>
          <h3 className="text-biru font-bold text-4xl">The process we follow</h3>
          <div className="grid grid-cols-4 mt-16">
            <div>
              <div className="flex">
                <div className="mr-6">
                  <div className="w-6 h-6 rounded-full bg-biru"></div>
                </div>
                <div className=" w-full h-6 flex items-center">
                  <div
                    className="border-t-4 border-dashed h-0
                  border-biruMuda w-2/3"
                  ></div>
                </div>
              </div>
              <p className="text-biru font-bold text-2xl mt-4">Ideate</p>
              <p className="text-black text-base pr-20 mt-1">Turn your idea from concept to MVP</p>
            </div>
            <div>
              <div className="flex">
                <div className="mr-6">
                  <div className="w-6 h-6 rounded-full bg-biru"></div>
                </div>
                <div className=" w-full h-6 flex items-center">
                  <div
                    className="border-t-4 border-dashed h-0
                  border-biruMuda w-2/3"
                  ></div>
                </div>
              </div>
              <p className="text-biru font-bold text-2xl mt-4">Design</p>
              <p className="text-black text-base pr-16 mt-1">Sketch out the product to align the user needs</p>
            </div>
            <div>
              <div className="flex">
                <div className="mr-6">
                  <div className="w-6 h-6 rounded-full bg-biru"></div>
                </div>
                <div className=" w-full h-6 flex items-center">
                  <div
                    className="border-t-4 border-dashed h-0
                  border-biruMuda w-2/3"
                  ></div>
                </div>
              </div>
              <p className="text-biru font-bold text-2xl mt-4">Develop</p>
              <p className="text-black text-base pr-20 mt-1">Convert the designs into a live application</p>
            </div>
            <div>
              <div>
                <div className="mr-6">
                  <div className="w-6 h-6 rounded-full bg-biru"></div>
                </div>
              </div>
              <p className="text-biru font-bold text-2xl mt-4">Deploy</p>
              <p className="text-black text-base pr-16 mt-1">Launching the application to the market</p>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir The process we follow */}

      {/* Awal The is Closing */}
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
      {/* Akhir The is Closing */}
    </Container>
  );
}

export default Home;
