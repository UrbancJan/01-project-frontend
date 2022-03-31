import React, { useEffect, useState } from "react";
import baseurl from "../baseURL/baseurl";
import User from "./interface/user";
import Quote from "./Quote";
import "./Quotes.css";

const Quotes = () => {
  const [quotesUsers, setQuotesUsers] = useState<User[]>([]);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await baseurl.get("/list");
        console.log("yo from test");
        if (response) {
          console.log(response.data);
          setQuotesUsers(response.data);
        }
      } catch (error: any) {
        console.log(error.response);
      }
    };
    data();
  }, []);
  return (
    <div className="quoteContainer">
      {/*
      {quotesUsers.map((user) => (
        <Quote key={user.id} userQuote={user} />
      ))}
      */}

      {/*todo pogleda koliko quovtov je in  če je manjše od 5 spremeni colum-item na 2 drugaše je na 3*/}
      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. Cras tempus ultrices turpis, non luctus magna lacinia eu.
            Duis bibendum sapien a
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. Cras tempus ultrices turpis, non luctus magna lacinia eu.
            Duis bibendum sapien a
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. Cras
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. CrasLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam rutrum, est consequat eleifend ullamcorper, quam ipsum
            fermentum risus, sit amet consectetur orci velit ac velit. Quisque a
            tristique massa. CrasLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam rutrum, est consequat eleifend ullamcorper,
            quam ipsum fermentum risus, sit amet consectetur orci velit ac
            velit. Quisque a tristique massa. CrasLorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam rutrum, est consequat eleifend
            ullamcorper, quam ipsum fermentum risus, sit amet consectetur orci
            velit ac velit. Quisque a tristique massa. Cras
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/*
      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. Cras Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam rutrum, est consequat eleifend ullamcorper, quam ipsum
            fermentum risus, sit amet consectetur orci velit ac velit. Quisque a
            tristique massa. Cras Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam rutrum, est consequat eleifend ullamcorper,
            quam ipsum fermentum risus, sit amet consectetur orci velit ac
            velit. Quisque a tristique massa. Cras
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. Cras
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. Cras
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. Cras
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. Cras
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. Cras
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. Cras
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            11 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. Cras
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-grid-container">
          <div className="card-content">
            12 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, est consequat eleifend ullamcorper, quam ipsum fermentum
            risus, sit amet consectetur orci velit ac velit. Quisque a tristique
            massa. Cras
          </div>
          <div className="card-user">John Doe</div>
          <div className="card-voting">
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6L6.5 1L11.5 6"
                  stroke="#322D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>250</div>
            <div>
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 1L6.5 6L1.5 0.999999"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    */}
    </div>
  );
};

export default Quotes;
