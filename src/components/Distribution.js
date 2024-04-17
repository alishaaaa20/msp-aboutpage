import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import {
  colorScale,
  countries,
  missingCountries,
} from "../components/Countries";

const Distribution = () => {
  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-left" data-aos-delay="200">
        <div className="my-4 py-4">
          <h2 className="my-6 text-center text-4xl text-blue-900 uppercase font-bold ">
            We Are a Distributed Team
          </h2>
          <div className="w-24 border-b-7 border-blue-900 "></div>
          <div
            className="flex justify-center my-20"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div style={{ margin: "auto", width: "900px", height: "700px" }}>
              <VectorMap
                map={worldMill}
                containerStyle={{
                  width: "700px",
                  height: "600px",
                }}
                backgroundColor="#282c34"
                markers={missingCountries}
                markerStyle={{
                  initial: {
                    fill: "red",
                  },
                }}
                series={{
                  regions: [
                    {
                      scale: colorScale,
                      values: countries,
                      min: 0,
                      max: 100,
                    },
                  ],
                }}
                onRegionTipShow={function reginalTip(event, label, code) {
                  return label.html(`
                  <div style="background-color: blue; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    <p>
                    ${countries[code]}
                    </p>
                    </div>`);
                }}
                onMarkerTipShow={function markerTip(event, label, code) {
                  return label.html(`
                  <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                    <p style="color: black !important;">
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    </div>`);
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Distribution;
