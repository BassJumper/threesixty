import React, { Component } from 'react';
import Icofont from 'react-icofont';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        });

    return (
        <div className="newsletter-form">
            <input
                ref={node => (email = node)}
                type="email"
                className="form-control"
                required
            />

            <button onClick={submit}>
                <Icofont icon="send-mail"/>
            </button>

            {status === "sending" && (
                <div className="subs-sending-msg"></div>
            )}
            {status === "error" && (
                <div
                    className="subs-error-msg"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="subs-success-msg"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
        </div>
    );
};

class Subscribe extends Component {
    state = {};
    render() {
        const url =
            "https://salahsoftwaresolution.us20.list-manage.com/subscribe/post?u=12beaf82e73f59e8b7d199a95&id=a7729f146f";
        return(
            <>
                <div className="subscribe-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 col-sm-12">
                                <p><b>Sign up for our monthly newsletter</b> and keep updated regularly.</p>
                            </div>
                            
                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <MailchimpSubscribe
                                    url={url}
                                    render={({
                                        subscribe,
                                        status,
                                        message
                                    }) => (
                                        <CustomForm
                                            status={status}
                                            message={message}
                                            onValidated={formData =>
                                                subscribe(formData)
                                            }
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Subscribe;


