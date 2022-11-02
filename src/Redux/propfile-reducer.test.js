import profileReducer, { addPost, deletePost } from "./profile-reducer";

let initialState = {
    postData: [
      { id: 1, massage: "Hello my brother", likeCount: "12" },
      { id: 2, massage: "You like me?", likeCount: "16" },
    ]
  };
  let action = addPost("it-hello.com")
  

test('new post should be added', () => {
    let newState = profileReducer(initialState, action)
    expect (newState.postData.length).toBe(3);

});
test('masssage should be "it-hello.com"', () => {
    let newState = profileReducer(initialState, action)
    expect (newState.postData[2].massage).toBe("it-hello.com");

});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(initialState, action)
    expect (newState.postData.length).toBe(1);

});

test("after deleting length shouldn't be decrement if id is incorrect ", () => {
    let action = deletePost(1000)
    let newState = profileReducer(initialState, action)
    expect (newState.postData.length).toBe(2);

});

