import React from 'react';
import { Link } from 'react-router-dom';

const BerandaView = ({ubahCari, cariProduct, hasilCari, hasilFilter }) => {

   return (
      <div className="beranda bg-blue-200 dark:bg-black w-full">
        <label className="input input-bordered bg-blue-700 text-black dark:bg-slate-700 dark:text-white flex items-center gap-2">
          <input
            type="text"
            className="grow cari placeholder-black dark:placeholder-white"
            placeholder="Search"
            onChange={(input) => ubahCari(input.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <p className='card dark:text-white'>
          Hasil dari : {cariProduct}, ditemukan : {hasilCari?.founded}
        </p>
  
        <div className="grid grid-cols-3">
          {hasilFilter?.restaurants?.map((data) => (
            <div className="" key={data?.name}>
              <div className="card bg-blue-400 text-black dark:bg-slate-500 dark:text-white w-96 shadow-xl">
                <figure>
                  <img src={`https://restaurant-api.dicoding.dev/image/small/${data.pictureId}`} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data?.name}</h2>
                  <p className="line-clamp-2">{data.description}</p>
                  <div className="card-actions justify-end">
                    <Link to={"/detail/:id" + data.id} className="btn btn-wide btn-primary text-black dark:btn btn-wide dark:btn-neutral dark:text-white">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="">
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque aut
                  repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="">
          <div className="mockup-code">
            <pre data-prefix="1">
              <code>npm i daisyui</code>
            </pre>
            <pre data-prefix="2">
              <code>installing...</code>
            </pre>
            <pre data-prefix="3" className="bg-warning text-warning-content">
              <code>Error!</code>
            </pre>
          </div>
          <br />
          <br />
        </div>
        <div className="">
          <footer className="footer bg-neutral text-neutral-content p-10">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </footer>
        </div>
      </div>
    );
}

export default BerandaView