import React from 'react';

const Blog = () => {
    return (
        <div className='m-5'>
            <h1 className='text-center text-success mt-3'>This Question Answer part?</h1>
            <div className='border border-1 rounded-2 m-3 text-info bg-dark  p-3'>
                <h4>What is difference between Authorization Vs authentication?</h4>
                <p><span className='fw-bold fs-4 text-primary'>Ans:</span>
                    <h6 className='text-light'>Authentication:</h6>
                    Authentication is the process of determining whether a person or someone's actions that are claimed to be correct are true. Authentication technology provides access control for systems by verifying that user credentials match the credentials in a database of authorized users or on a data authentication server. That is to say, authentication is to verify or determine the real owner of something.
                    <h6 className='text-light'>Authorization:</h6>
                    The process of giving someone permission to use a resource to do something. A good example is home ownership. The owner has full access to the property (assets) but may give other people the right to access it. You are saying that the owner authorizes people to access it. This means authorizing someone to do something.

                </p>
            </div>

            <div className='border border-1 rounded-2 m-3 bg-warning text-dark p-3'>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p><span className='fw-bold fs-4 text-primary'>Ans:</span>
                    <br />
                    I used Firebase to easily check the authenticity of the website and to protect the user's data.
                    <h6 className='text-success'>Most 10 alternative of firebase:</h6>
                    1.Parse
                    2.Back4App
                    3.AWS Amplify
                    4. Kuzzle
                    5.Couchbase
                    <br />
                    6. NativeScript
                    7. RxDB
                    8. Flutter
                    9. LoopBack
                    10. SashiDo
                </p>


            </div>
            <div className='border border-1 rounded-2 m-3 bg-success text-light p-3'>
                <h4> What other services does firebase provide other than authentication</h4>
                <p><span className='fw-bold fs-4 text-primary'>Ans:</span>
                    <br />
                    Cloud Firebase, Machine Learning, Cloud Functions, Hosting, Cloud Storage, Realtime Database, Google Analytics,
                    <br />
                    App Distribution, Test Lab, Performance Monitoring,
                    Crashlytics, In-APP Messaging, A/B Testing, Cloud Messaging,Remote Config, Dynamic Links.
                </p>
            </div>


        </div>
    );
};

export default Blog;