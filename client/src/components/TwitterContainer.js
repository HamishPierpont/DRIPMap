import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterContainer = () => {
  return (
    <section className="">
      <div className="">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="DisastersChart"
          options={{
            tweetLimit: "10",
            width: "100%",
            height: 50,
          }}
          //theme="dark"
          noHeader="true"
          noBorders="true"
          noFooter="true"
          noScrollbar="true"
        ></TwitterTimelineEmbed>
      </div>
    </section>
  );
};

export default TwitterContainer;