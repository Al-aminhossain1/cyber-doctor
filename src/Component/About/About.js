import React from 'react';
import hacker from '../../images/cyber1.png'

const About = () => {
    return (
        <div className='row'>
            <h1 className='text-center'>welcome to know about me!!!</h1>
            <div className='d-flex m-5 col col-sm-12 p-5'>
                <div>
                    <h3>hey,
                        i am md Shahenoor rahman
                    </h3>
                    <p>i want to be a good web developer</p>
                    <p className='w-100 pe-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam corrupti repellendus ratione dolor, suscipit hic labore dolorum aut nam odit obcaecati dicta possimus, enim ut magni. At ullam hic dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero distinctio veritatis numquam. Repellendus totam, quod suscipit recusandae et sunt architecto! Corrupti ullam, animi eos assumenda numquam non voluptate iste sint nulla delectus perferendis. Quis suscipit earum sunt corporis? Quis corporis atque nisi mollitia? Officiis consequuntur nobis maiores a molestias!</p>
                </div>
                <div>
                    <img src={hacker} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;