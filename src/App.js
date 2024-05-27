import { useState } from "react";
import logo from "./assets/logo2.svg";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MenuIcon from "@mui/icons-material/Menu";
import Checkbox from "@mui/material/Checkbox";

function App() {
  const [activeOption, setActive] = useState("");

  const updateOption = (option) => {
    setActive(option);
    console.log(option);
  };
  return (
    <div>
      <header className="bg-[#024751] transition-element py-6 px-2 flex justify-between items-center w-full h-full">
        <IconButton aria-label="delete" sx={{ color: "white" }}>
          <KeyboardBackspaceIcon />
        </IconButton>
        <img src={logo} className="App-logo" alt="logo" />
        <IconButton aria-label="delete" sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
      </header>

      <div className="p-3">
        <div className="flex justify-between items-center my-4">
          <div className="w-full bg-[#024751] mr-1  rounded-full h-2"></div>
          <div className="w-full bg-[#024751] mr-1 rounded-full h-2"></div>
          <div className="w-full bg-[#F0F5F4] mr-1 rounded-full h-2"></div>
          <div className="w-full bg-[#F0F5F4] mr-1 rounded-full h-2"></div>
          <div className="w-full bg-[#F0F5F4] mr-1 rounded-full h-2"></div>
          <div className="w-full bg-[#F0F5F4] mr-1 rounded-full h-2"></div>
          <div className="w-full bg-[#F0F5F4] mr-1 rounded-full h-2"></div>
          <div className="w-full bg-[#F0F5F4] mr-1 rounded-full h-2"></div>
          <div className="w-full bg-[#F0F5F4] mr-1 rounded-full h-2"></div>
          <div className="w-full bg-[#F0F5F4] mr-1 rounded-full h-2"></div>
        </div>
        <h1 className="font-semibold text-lg">
          What service would you like to book?
        </h1>

        <h3 className="text-sm py-4">
          You can select one type of cleaning and extra tasks
        </h3>

        <div>
          <div
            onClick={() => setActive("standard")}
            className={`mb-4 transition-element  px-2.5 py-3 border  rounded-xl ${
              activeOption === "standard" &&
              "border-[#024751] transition-element"
            }`}
          >
            <div className="cursor-pointer flex items-center justify-between transition-element">
              <span>Standard Cleaning</span>{" "}
              <span>
                <Checkbox size="small" />
              </span>
            </div>
            {activeOption === "standard" && (
              <div className="w-full">
                <h4 className="text-red-500 text-sm text-center my-3 flex justify-end">
                  Hide Details
                </h4>

                <div className={`overflow-y-auto h-[400px] text-[#0F2730]`}>
                  <div className="mb-2">
                    <h3 className="font-semibold">BEDROOMS</h3>
                    <ul className="list-disc pl-5 pt-2">
                      <li>Dusting of furniture and surfaces</li>
                      <li>Making bed</li>
                      <li>Sweeping and/or mopping floors</li>
                      <li>Dusting and wiping of skirtings</li>
                      <li>
                        Folding or hanging clothes on the bed or around the
                        bedroom (This does not include wardrobe or closet
                        reorganization)
                      </li>
                      <li>Cleaning Mirrors</li>
                      <li>Cleaning out cobwebs</li>{" "}
                    </ul>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-semibold">BATHROOMS</h3>
                    <ul className="list-disc pl-5 pt-2">
                      <li>Cleaning of shower, bath, and sinks</li>
                      <li>Toilet clean</li>
                      <li>Wiping of counters and taps</li>
                      <li>Wiping of walls and mirrors</li>
                      <li>Wiping outside of cupboards and cabinets</li>
                      <li>Folding or hanging of clean towels</li>
                      <li>Emptying bins and cleaning bin area</li>
                      <li>Mopping floors</li>
                      <li>Cleaning out cobwebs</li>
                    </ul>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-semibold">LIVING ROOM</h3>
                    <ul className="list-disc pl-5 pt-2">
                      <li>The dusting of furniture and surfaces</li>
                      <li>Mopping and sweeping of floors</li>
                      <li>Dusting and wiping of skirtings</li>
                      <li>
                        Dusting and wiping of electronics, pictures frames etc.
                      </li>
                      <li>
                        Dusting and wiping of light switches and other fixtures
                      </li>
                      <li>Cleaning Mirrors</li>
                      <li>Cleaning out cobwebs</li>
                    </ul>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-semibold">KITCHEN</h3>
                    <ul className="list-disc pl-5 pt-2">
                      <li>Wiping of surfaces, sinks, and appliances</li>
                      <li>Washing of dishes</li>
                      <li>Wiping outside of cupboards and fridge</li>
                      <li>
                        Cleaning the Stove top and the walls behind the stove
                      </li>
                      <li>Cleaning inside and outside of the microwave</li>
                      <li>Wiping of walls</li>
                      <li>Emptying bins and cleaning bin area</li>
                      <li>Mopping floors</li>
                      <li>Cleaning out cobwebs</li>
                    </ul>
                  </div>
                  <h3 className="my-2">
                    Cleaning of Staircases within the home is also covered.
                  </h3>
                  <h3 className="my-2">
                    Homes significantly larger than other homes of the same size
                    and bookings that run longer than the estimated booking
                    hours might attract additional charges which will be duly
                    communicated.
                  </h3>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setActive("deep")}
            className={`mb-4 transition-element  px-2.5 py-3 border  rounded-xl ${
              activeOption === "deep" && "border-[#024751] transition-element"
            }`}
          >
            <div className="cursor-pointer flex items-center justify-between transition-element">
              <span>Deep Cleaning</span>{" "}
              <span>
                <Checkbox size="small" />
              </span>
            </div>
            {activeOption === "deep" && (
              <div className="w-full">
                <h4 className="text-red-500 text-sm text-center my-3 flex justify-end">
                  Hide Details
                </h4>

                <div className={`overflow-y-auto h-[400px] text-[#0F2730]`}>
                  <div className="mb-2">
                    <h3 className="font-semibold">BEDROOMS</h3>
                    <ul className="list-disc pl-5 pt-2">
                      <li>Dusting of furniture and surfaces</li>
                      <li>Making bed</li>
                      <li>Sweeping and/or mopping floors</li>
                      <li>Dusting and wiping of skirtings</li>
                      <li>
                        Folding or hanging clothes on the bed or around the
                        bedroom (This does not include wardrobe or closet
                        reorganization)
                      </li>
                      <li>Cleaning Mirrors</li>
                      <li>Cleaning out cobwebs</li>{" "}
                    </ul>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-semibold">BATHROOMS</h3>
                    <ul className="list-disc pl-5 pt-2">
                      <li>Cleaning of shower, bath, and sinks</li>
                      <li>Toilet clean</li>
                      <li>Wiping of counters and taps</li>
                      <li>Wiping of walls and mirrors</li>
                      <li>Wiping outside of cupboards and cabinets</li>
                      <li>Folding or hanging of clean towels</li>
                      <li>Emptying bins and cleaning bin area</li>
                      <li>Mopping floors</li>
                      <li>Cleaning out cobwebs</li>
                    </ul>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-semibold">LIVING ROOM</h3>
                    <ul className="list-disc pl-5 pt-2">
                      <li>The dusting of furniture and surfaces</li>
                      <li>Mopping and sweeping of floors</li>
                      <li>Dusting and wiping of skirtings</li>
                      <li>
                        Dusting and wiping of electronics, pictures frames etc.
                      </li>
                      <li>
                        Dusting and wiping of light switches and other fixtures
                      </li>
                      <li>Cleaning Mirrors</li>
                      <li>Cleaning out cobwebs</li>
                    </ul>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-semibold">KITCHEN</h3>
                    <ul className="list-disc pl-5 pt-2">
                      <li>Wiping of surfaces, sinks, and appliances</li>
                      <li>Washing of dishes</li>
                      <li>Wiping outside of cupboards and fridge</li>
                      <li>
                        Cleaning the Stove top and the walls behind the stove
                      </li>
                      <li>Cleaning inside and outside of the microwave</li>
                      <li>Wiping of walls</li>
                      <li>Emptying bins and cleaning bin area</li>
                      <li>Mopping floors</li>
                      <li>Cleaning out cobwebs</li>
                    </ul>
                  </div>
                  <h3 className="my-2">
                    Cleaning of Staircases within the home is also covered.
                  </h3>
                  <h3 className="my-2">
                    Homes significantly larger than other homes of the same size
                    and bookings that run longer than the estimated booking
                    hours might attract additional charges which will be duly
                    communicated.
                  </h3>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setActive("move-in")}
            className={`mb-4 transition-element  px-2.5 py-3 border  rounded-xl ${
              activeOption === "move-in" &&
              "border-[#024751] transition-element"
            }`}
          >
            <div className="cursor-pointer flex items-center justify-between transition-element">
              <span>Move-in Cleaning</span>{" "}
              <span>
                <Checkbox size="small" />
              </span>
            </div>
            {activeOption === "move-in" && (
              <div className="w-full">
                <h4 className="text-red-500 text-sm text-center my-3 flex justify-end">
                  Hide Details
                </h4>

                <div className={`overflow-y-auto h-[400px] text-[#0F2730]`}>
                  <div className="mb-2">
                    <h3 className="font-semibold">BEDROOMS</h3>
                    <ul className="list-disc pl-5 pt-2">
                      <li>Dusting of furniture and surfaces</li>
                      <li>Making bed</li>
                      <li>Sweeping and/or mopping floors</li>
                      <li>Dusting and wiping of skirtings</li>
                      <li>
                        Folding or hanging clothes on the bed or around the
                        bedroom (This does not include wardrobe or closet
                        reorganization)
                      </li>
                      <li>Cleaning Mirrors</li>
                      <li>Cleaning out cobwebs</li>{" "}
                    </ul>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-semibold">BATHROOMS</h3>
                    <ul className="list-disc pl-5 pt-2">
                      <li>Cleaning of shower, bath, and sinks</li>
                      <li>Toilet clean</li>
                      <li>Wiping of counters and taps</li>
                      <li>Wiping of walls and mirrors</li>
                      <li>Wiping outside of cupboards and cabinets</li>
                      <li>Folding or hanging of clean towels</li>
                      <li>Emptying bins and cleaning bin area</li>
                      <li>Mopping floors</li>
                      <li>Cleaning out cobwebs</li>
                    </ul>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-semibold">LIVING ROOM</h3>
                    <ul className="list-disc pl-5 pt-2">
                      <li>The dusting of furniture and surfaces</li>
                      <li>Mopping and sweeping of floors</li>
                      <li>Dusting and wiping of skirtings</li>
                      <li>
                        Dusting and wiping of electronics, pictures frames etc.
                      </li>
                      <li>
                        Dusting and wiping of light switches and other fixtures
                      </li>
                      <li>Cleaning Mirrors</li>
                      <li>Cleaning out cobwebs</li>
                    </ul>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-semibold">KITCHEN</h3>
                    <ul className="list-disc pl-5 pt-2">
                      <li>Wiping of surfaces, sinks, and appliances</li>
                      <li>Washing of dishes</li>
                      <li>Wiping outside of cupboards and fridge</li>
                      <li>
                        Cleaning the Stove top and the walls behind the stove
                      </li>
                      <li>Cleaning inside and outside of the microwave</li>
                      <li>Wiping of walls</li>
                      <li>Emptying bins and cleaning bin area</li>
                      <li>Mopping floors</li>
                      <li>Cleaning out cobwebs</li>
                    </ul>
                  </div>
                  <h3 className="my-2">
                    Cleaning of Staircases within the home is also covered.
                  </h3>
                  <h3 className="my-2">
                    Homes significantly larger than other homes of the same size
                    and bookings that run longer than the estimated booking
                    hours might attract additional charges which will be duly
                    communicated.
                  </h3>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setActive("ironing")}
            className={`mb-4 transition-element  px-2.5 py-3 border  rounded-xl ${
              activeOption === "Ironing" &&
              "border-[#024751] transition-element"
            }`}
          >
            <div className="cursor-pointer flex items-center justify-between transition-element">
              <span>Ironing</span>{" "}
              <span>
                <Checkbox size="small" />
              </span>
            </div>
            {activeOption === "ironing" && (
              <div className="w-full">
                <h4 className="text-red-500 text-sm text-center my-3 flex justify-end">
                  Hide Details
                </h4>

                <div
                  className={`overflow-y-auto h-[300px] text-[#0F2730] py-3`}
                >
                  <div className="mb-2">
                    <h3 className="">
                      Our pricing covers 1 load of items to be ironed. This
                      typically takes up to 2 hours of work per load.
                    </h3>
                    Our pricing covers 1 load of items to be ironed. This
                    typically takes up to 2 hours of work per load.
                    <ul className="list-disc pl-5 pt-2">
                      <li className="my-4">
                        1 load: <br />
                        15 pieces of regular-sized items.
                      </li>
                      <li>
                        We are flexible. <br />
                        Items significantly under or over 1 load will be priced
                        accordingly. Kindly contact us for support.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setActive("laundry")}
            className={`mb-4 transition-element  px-2.5 py-3 border  rounded-xl ${
              activeOption === "laundry" &&
              "border-[#024751] transition-element"
            }`}
          >
            <div className="cursor-pointer flex items-center justify-between transition-element">
              <span>Laundry</span>{" "}
              <span>
                <Checkbox size="small" />
              </span>
            </div>
          </div>
          <div
            onClick={() => setActive("wardrobe")}
            className={`mb-4 transition-element  px-2.5 py-3 border  rounded-xl ${
              activeOption === "wardrobe" &&
              "border-[#024751] transition-element"
            }`}
          >
            <div className="cursor-pointer flex items-center justify-between transition-element">
              <span>Wardrobe Organization</span>{" "}
              <span>
                <Checkbox size="small" />
              </span>
            </div>
          </div>
        </div>

        <Button
          disableElevation
          variant="contained"
          sx={{
            borderRadius: "50px",
            background: "#FF5416",
            padding: "10px 0",
          }}
          fullWidth={true}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default App;
