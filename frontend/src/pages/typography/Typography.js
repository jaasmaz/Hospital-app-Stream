import "stream-chat-react/dist/css/index.css";
import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
//dotenv helps to get envirnment variables
import dotenv from "dotenv";
dotenv.config();
const appId = process.env.REACT_APP_CLIENT_ID;
const userToken = process.env.REACT_APP_USER_TOKEN;
//filters to get rooms only in which our user (jasim in this case) is included
const filters = { type: "messaging", members: { $in: ["jasim"] } };
//to get latest chatted room on the top of the list
const sort = { last_message_at: -1 };

const TypographyPage = () => {
  //state of client who is activated (jasim in this case)
  const [chatClient, setChatClient] = useState(null);

  //hook that triggers on page load
  useEffect(() => {
    const initChat = async () => {
      //stram chat is getting by npm package and being initlized with app id, that can be found in dashboard
      const client = StreamChat.getInstance(appId);

      //connecting the current user
      await client.connectUser(
        {
          id: "jasim",
          name: "Jasim",
          image: "https://getstream.io/random_svg/?name=John",
        },
        userToken,
      );

      //we can create brand new channels and 1st channel if not available. even more
      // const channel = client.channel("messaging", "JasimChannel", {
      //   name: "another channel by Jasim",
      //   image: "https://getstream.imgix.net/images/random_svg/J.svg",
      //   members: ["userID1", "userID2", "userID3", "jasim"],
      // });

      // await channel.create();

      //setting client's state up
      setChatClient(client);
    };

    //calling function to initilize the chat rooms
    initChat();
  }, []);

  //loader for nice UI
  if (!chatClient) {
    return <LoadingIndicator />;
  }

  //return method returns the final UI to the end user. these components are from official docs.
  return (
    <Chat client={chatClient} theme='messaging light'>
      <ChannelList filters={filters} sort={sort} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default TypographyPage;
