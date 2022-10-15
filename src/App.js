import React from "react";
import "./App.css";
import DropDown from "./DropDown";

const DropDownData = {
  account: "1212121",
  child: [
    {
      name: "VPC1",
      child: [
        {
          name: "cluster 1",
          child: [
            {
              name: "EMS",
              child: [
                {
                  name: "production",
                  services: {
                    child: [
                      {
                        name: "common-test1",
                      },
                      {
                        name: "common-test2",
                      },
                    ],
                    child: [
                      {
                        name: "business-test1",
                      },
                      {
                        name: "business-test2",
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: "Procurement",
              child: [
                {
                  name: "dev",
                  child: [
                    {
                      name: "common",
                      child: [
                        {
                          name: "common-test1",
                        },
                        {
                          name: "common-test2",
                        },
                      ],
                    },
                    {
                      name: "business",
                      child: [
                        {
                          name: "business-test1",
                        },
                        {
                          name: "business-test2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "VPC2",
      child: [
        {
          name: "cluster 1",
          child: [
            {
              name: "EMS",
              child: [
                {
                  name: "production",
                  child: [
                    {
                      name: "common",
                      child: [
                        {
                          name: "common-test1",
                        },
                        {
                          name: "common-test2",
                        },
                      ],
                    },
                    {
                      name: "business",
                      child: [
                        {
                          name: "business-test1",
                        },
                        {
                          name: "business-test2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "Procurement",
              child: [
                {
                  name: "dev",
                  services: {
                    child: [
                      {
                        name: "common-test1",
                      },
                      {
                        name: "common-test2",
                      },
                    ],
                    child: [
                      {
                        name: "business-test1",
                      },
                      {
                        name: "business-test2",
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <DropDown data={DropDownData} />
    </div>
  );
}

export default App;
