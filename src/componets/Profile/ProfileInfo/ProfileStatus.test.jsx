import React from "react";
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus componet", () => {
  test("status from props should be in the state", () => {
    const component = create (<ProfileStatus status ="it-hello.com"/>)
    const  instance = component.getInstance();
    expect(instance.state.status).toBe("it-hello.com");
  })
  test("after creation <span> should be dispalayed", () => {
    const component = create (<ProfileStatus status ="it-hello.com"/>)
    const  root = component.root;
    let span = root.findByType("span")
    expect(span).not.toBeNull();
  })
  test("after creation <input> should't be dispalayed", () => {
    const component = create (<ProfileStatus status ="it-hello.com"/>)
    const  root = component.root;
    expect (()=>{
      let span = root.findByType("input")
    }).toThrow();
  })
  
  test("after creation <span> should contaains correct status", () => {
    const component = create (<ProfileStatus status ="it-hello.com"/>)
    const  root = component.root;
    let span = root.findByType("span")
    expect(span.children[0]).toBe("it-hello.com");
  })
  test("input should be display in editMode instead of span", () => {
    const component = create (<ProfileStatus status ="it-hello.com"/>)
    const  root = component.root;
    let span = root.findByType("span")
    span.props.onDoubleClick();
    let input = root.findByType("input")
    expect(input.props.value).toBe("it-hello.com")
  })
  test("Callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create (<ProfileStatus status ="it-hello.com" updateStatus={mockCallback}/>)
    const instance = component.getInstance();
    instance.deactiveEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
    
  })
  
  
})