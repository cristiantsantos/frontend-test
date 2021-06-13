import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allpostsSet } from '../store/modules/allposts/actions';

import { Form } from '@unform/web';
import Post from '../components/Post'
import NewPost from '../components/NewPost'


export default function Main() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const posts = useSelector((state) => state.allposts.posts);

  useEffect(() => {
    function loadPosts() {
      dispatch(allpostsSet());
    }
    loadPosts();
  }, [dispatch]);

  /*
  function handleNewPost(e) {
    setPosts([
      {
        id: posts.length + 100,
        img: `https://avatars2.githubusercontent.com/u/${Math.floor(Math.random() * 300) + 1}?s=500`,
        ...e,
      },
      ...posts,
    ]);
    formRef.current.setData({
      userId: '',
      title: '',
      body: '',
    });
  }
*/
  return (
    <>
      <Form ref={formRef} >
        <NewPost />
      </Form>
      { !posts ? null :
        <Post posts={posts}/>
      }
    </>
  );
}
