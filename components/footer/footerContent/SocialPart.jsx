import React from "react";
import { socialMedia } from "../../../mock/footer";
import Link from "next/link";

const SocialPart = () => {

  return (
    <div className="mt-8 xl:mt-0 xl:ml-12 2xl:ml-48">
      <div>
        <h2 className="text-md sm:text-lg">{"Be With Us !"}</h2>
        <div className="flex mt-3">
          {socialMedia.map((SocialItem) => {
            return (
              <Link href={SocialItem.href} key={SocialItem.name} legacyBehavior>
                <a
                  className="px-2 opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  aria-label={SocialItem.name}
                >
                  <SocialItem.icon
                    style={{
                      fontSize: "2rem",
                      color: "inherit",
                    }}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-md sm:text-lg">{"Stay up to date with the latest discounts by emailing us"}</h2>
        <form
          className="flex items-center flex-wrap sm:flex-nowrap mt-4 "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className=" w-full py-3 bg-white px-4 outline-none rounded-lg sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg  shadow-md sm:shadow-none focus:shadow-sm"
            type="email"
            placeholder={"Please Enter Your Email"}
          />
          <button
            className="outline-none py-3 px-4 w-full sm:w-auto mt-2 sm:mt-0 rounded-lg sm:rounded-none md:w-auto bg-palette-primary text-palette-side sm:rounded-tr-lg sm:rounded-br-lg"
            type="button"
          >
            {"Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SocialPart;
