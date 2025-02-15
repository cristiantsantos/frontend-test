import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allpostsSet } from '../store/modules/allposts/actions';

import Post from '../components/Post';
import NewPost from '../components/NewPost';
import { Container } from '../pages/styles';

export default function Main() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.allposts.posts);

  useEffect(() => {
    function loadPosts() {
      dispatch(allpostsSet());
    }
    loadPosts();
  }, [dispatch]);

  return (
    <Container>
      <NewPost posts={posts} />
      <Post posts={posts} view={false} />
    </Container>
  );
}
