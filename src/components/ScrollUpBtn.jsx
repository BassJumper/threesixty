import React, { Component } from "react";
import ScrollUpButton from "react-scroll-up-button";

class ScrollUpBtn extends Component {
    state = {};
    render() {
        return (
            <>
                <ScrollUpButton
                    //Note: wouldn't work as a class for some reason - yuk - the only one haha
                    style={{
                        backgroundColor: "#131111",
                        padding: 8,
                        borderRadius: 50,
                        width: 40,
                        height: 40
                    }}
                />
            </>
        );
    }
}
export default ScrollUpBtn;
