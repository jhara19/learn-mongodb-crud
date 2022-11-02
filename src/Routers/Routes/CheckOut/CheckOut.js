import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {_id, title, img, price, description} = useLoaderData();
    const {user} = useContext(AuthContext);
    const handlePlaceOrder = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = `${form.firstName.value} ${form.lastName.value} `;
      const email = user?.email || 'unregistered';
      const message = form.message.value;
      const phone = form.phone.value;

      const order = {
        service: _id,
        serviceName: title,
        price,
        customer: name,
        email,
        phone,
        message
      }
    }

    return (
        <div>

            <h1>checkout Page</h1>
            <h2 className="text-5xl text-red-600 my-5 text-center">{title}</h2>

            <div className="card bg-base-100 w-1/2 mx-auto shadow-lg my-10">
                <figure><img src={img} alt="Shoes" className='w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className="py-4">{price}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
           </div>

          <form onSubmit={handlePlaceOrder} className='my-20'>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input type="text" name='firstName' placeholder="First Name" className="input input-ghost w-full input-bordered" />
                <input type="text" name='lastName' placeholder="Last Name" className="input input-ghost w-full input-bordered" />
                <input type="text" name='phone' placeholder="Your Phone" className="input input-ghost w-full input-bordered" />
                <input type="text" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
             </div>
             <textarea name='message' className="textarea textarea-bordered h-24 w-full my-10" placeholder="Your message"></textarea>
                
                <input type="submit" className='btn' value='Place your order' />
          </form>
        </div>
    );
};

export default CheckOut;