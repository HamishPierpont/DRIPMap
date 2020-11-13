import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterContainer = () => {
  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="NCS_Earthquake"
          options={{
            tweetLimit: "3",
            width: "100%",
            height: 50,
          }}
          theme="light"
          noFooter="true"

        ></TwitterTimelineEmbed>
      </div>
    </section>
  );
};

export default TwitterContainer;