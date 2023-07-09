import SectionTitle from "../SectionTitle/SectionTitle";
import { BiPhone, BiMailSend } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
const Contact = () => {
    const { register,reset, formState: { errors } } = useForm();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l9uai7i', 'template_p5lrfus', form.current, '9IVgv1yi-d5oVkvIo')
            .then((result) => {
                //console.log(result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Send Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset(); 
            }, (error) => {
                console.log(error.text);
            });
    };
   
    return (
        <div name="contact" className='bg-black pb-8 md:pb-0 py-20 '>

            <SectionTitle heading="Contact me" className="pt-8 md:pt-16 lg:pt-24"></SectionTitle>


            <div className="max-w-screen-lg lg:mx-auto mx-8 lg:grid grid-cols-12 gap-10 lg:mt-20">
                <div
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="col-span-5 space-y-6"
                >
                    <div className="space-y-4">
                        <h3 className="lg:text-2xl text-lg font-bold">
                            Get in Touch
                        </h3>
                        <div className="w-36 h-2 bg-[#b366b3] rounded-lg"></div>
                    </div>
                    <div className="flex gap-6 justify-start items-center p-6 bg-gradient-to-r from-[#330033] to-[#730073] border border-sec-color rounded-lg">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#b366b3] text-2xl text-main-color">
                            <BiPhone />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold">Phone</h3>
                            <p className="text-white">+8801648017927</p>
                        </div>
                    </div>
                    <div className="flex gap-6 justify-start items-center p-6 bg-gradient-to-r from-[#330033] to-[#730073] border border-sec-color rounded-lg">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#b366b3] text-2xl text-main-color">
                            <BiMailSend />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold">Email</h3>
                            <p className="text-white">nishitadasguptamoul@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-6 justify-start items-center p-6 bg-gradient-to-r from-[#330033] to-[#730073] border border-sec-color rounded-lg">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#b366b3] text-2xl text-main-color">
                            <CiLocationOn />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold">Address</h3>
                            <p className="text-white">Chattogram, Bangladesh</p>
                        </div>
                    </div>
                </div>
              
               

                <form
             ref={form} onSubmit={sendEmail}
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className="col-span-7 bg-gradient-to-r from-[#330033] to-[#730073] p-6 rounded-lg border border-sec-color lg:mx-0 mx-8 lg:mt-0 mt-10"
                    
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name" 
                            
                            // name="user_name"
                            {...register("user_name", { required: true })}
                            className="border border-sec-color rounded-md py-3 px-5 bg-white text-black focus:border-main-color focus:outline-none"
                        />
                        {errors.name && (
                            <span className="text-red-500 text-xs italic">
                                This field is required
                            </span>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email" 
                            // name="user_email"
                            {...register("user_email", { required: true })}
                            className="border border-sec-color rounded-md py-3 px-5 bg-white text-black focus:border-main-color focus:outline-none"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-xs italic">
                                This field is required
                            </span>
                        )}
                    </div>
                
                    <div className="form-control">
                        <label className="label">
                            <span className="">Message</span>
                        </label>
                        <textarea
                            {...register("message", { required: true })} 
                            // name="message"
                            className="border border-sec-color rounded-md py-3 px-5 bg-white text-black focus:border-main-color focus:outline-none"
                            cols={30}
                            rows={4}
                            placeholder="Write your message"
                        ></textarea>
                        {errors.message && (
                            <span className="text-red-500 text-xs italic">
                                This field is required
                            </span>
                        )}
                    </div>

                    <button type="submit" className='mx-auto btn mt-4 lg:btn-md btn-sm bg-black  text-white flex items-center gap-3 uppercase font-medium  py-2 px-4 rounded-lg border-[1px] border-b-[6px] border-[#a64da6] shadow-md shadow-[#993399] hover:bg-[#a64da6] hover:shadow-[0px]'>Send Message</button>
                </form>
            </div>
            <div className="h-14 w-full bg-transparent"></div>

        </div>
    );
};

export default Contact;