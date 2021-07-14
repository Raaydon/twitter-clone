import React, { useState, useEffect } from "react";
import db from "../../firebase";
// import Tweet from '../Tweet';
import TweetBox from "../TweetBox";
import Post from '../Post'
import FlipMove from "react-flip-move";
import { Container, Tweets } from './styles';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;

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
              date={today}
            />
          ))}
        </FlipMove>
      </Tweets>
    </Container>
  );
};

