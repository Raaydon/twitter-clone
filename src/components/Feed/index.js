import React, { useState, useEffect } from "react";
import db from "../../firebase";
// import Tweet from '../Tweet';
import TweetBox from "../TweetBox";
import Post from '../Post'
import FlipMove from "react-flip-move";


import { Container, Tweets } from './styles';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // let unmounted = false;
    // if (!unmounted) {
    //   db.collection("posts").onSnapshot((snapshot) =>
    //   setPosts(snapshot.docs.map((doc) => doc.data()))
    // );
    // }
    db.collection("posts").onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map((doc) => doc.data()))
  );
  }, []);
  return (
    <Container>
      <Tweets>
        <TweetBox />
        <FlipMove>
          {posts.map((post, idx) => (
            <Post
              key={idx}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ))}
        </FlipMove>
      </Tweets>
    </Container>
  );
};

