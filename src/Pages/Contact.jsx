import React from 'react'
import '../Stylesheet/Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsPhoneVibrate} from 'react-icons/bs'
import {FiMapPin} from 'react-icons/fi'

const Contact = () => {
  return (
<div>
 
<div className="class">
      <div className="text-white flex flex-col  lg:text-center   lg:justify-center lg:items-center">
        <div className="text-7xl p-10 lg:pl-[15rem] text-center font-semibold">
          Contact<span>Me!</span>
                </div>

        <div className="lg:flex p-5 lg:space-x-5 space-y-5">
          <div className="text-2xl flex flex-col p-5 justify-center items-center text-center">
            <div className=" p-5"><HiOutlineMail className=' w-[4rem] h-[4rem] text-[#00ec00]'/></div>
            <div>SuperSonicThemes@gmail.com</div>
          </div>

          <div className="text-2xl flex flex-col p-5 border-[#00ec00] lg:border-x-[3px] max-sm:border-y-[3px] px-[5rem] justify-center items-center text-center">
            <div className="text-3xl p-5 "><BsPhoneVibrate className='w-[4rem] h-[4rem] text-[#00ec00]'/></div>
            <div>+9234898234</div>
          </div>

          <div className="text-2xl flex flex-col p-5 justify-center items-center text-center">
            <div className="text-3xl p-5"><FiMapPin className='w-[4rem] h-[4rem] text-[#00ec00]'/></div>
            <div>house2 main street</div>
          </div>
        </div>

        <iframe
          className="w-full mt-[5rem] "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4445821863756!2d67.06660267424758!3d24.882812544364914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f5968be106b%3A0x3bf760ba8a5dd334!2sEscuela%20Schooling%20System!5e0!3m2!1sen!2s!4v1692034395181!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  











    <div className='px-[10rem]'>
      <div className="text-6xl text-center lg:p-5 mt-6 font-semibold">Send Us A Message!</div>
      <br />
      <p className="text-2xl flex text-center items-center justify-center">
        <span className='font-semibold'>IF YOU HAVE ANY QUESTION</span>
      </p>
      <section className="contact mt-28" id="contact">
        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input type="text" placeholder="Email Address" required />
              <span className="focus"></span>
            </div>
            <span className="animate scroll" style={{'--i':3}}></span>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input type="number" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>
            <span className="animate scroll" style={{ '--i': 5 }}></span>
          </div>
          <div className="textarea-field">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <span className="focus"></span>
            <span className="animate scroll" style={{ '--i': 7 }}></span>
          </div>
          <div className="btn-box btns">
            <button type="submit" className="btn ">
              Submit
            </button>
            <span className="animate scroll" style={{ '--i': 9 }}></span>
          </div>
        </form>
        
      </section>
    </div>
    </div>

</div> 
  )
}

export default Contact