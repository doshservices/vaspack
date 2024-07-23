import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import DropdownAll from "../../../components/Dropdown/DropdownAll";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [selectedEnquiryValue, setSelectedEnquiryValue] = useState(null);
  const [selectedServiceValue, setSelectedServiceValue] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const handleError = () => {};

  const handleEnquirySelect = (value) => {
    setSelectedEnquiryValue(value);
    setValue("Enquiry", value);
  };
  const handleServiceSelect = (value) => {
    setSelectedServiceValue(value);
    setValue("Service", value);
  };

  const registerOptions = {
    to: {
      value: "mmadujonathan@gmail.com",
    },
    toName: {
      value: "Vaspack Energy",
    },
    fromName: {
      required: "Full Name is required",
      minLength: {
        value: 3,
        message: "Full Name must have at least 3 characters",
      },
    },
    from: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Invalid email address",
      },
    },
    text: {
      required: "Message is required",
      minLength: {
        value: 3,
        message: "Message must have at least 3 characters",
      },
    },
  };

  const handleApiSubmit = async () => {
    if (selectedEnquiryValue === null || selectedServiceValue === null) {
      // Show error message using react-toastify
      toast.error("Please select values for both dropdown fields.");
      return; // Exit the function early if either dropdown field is null
    }
    setLoading(true);
    const { fromName, from, text } = getValues(); // Getting form values
    const to = "sales@vaspackenergy.com"; // Updated with your 'to' value
    const toName = "Vaspack Energy"; // Updated with your 'toName' value

    // Construct the text message including selectedEnquiryValue and selectedServiceValue
    const messageText = `
      Enquiry Type: ${selectedEnquiryValue}
      Service Type: ${selectedServiceValue}
      
      Message:
      ${text}
    `;

    const data = {
      to,
      toName,
      fromName,
      from,
      text,
      selectedEnquiryValue,
      selectedServiceValue,
    };
    console.log("Data: ", data);

    const url =
      "https://seacraft-mailer-8zqrk.ondigitalocean.app/api/send-mail";

    try {
      const response = await axios.post(
        url,
        { ...data, text: messageText },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response)
      toast.success("Form submitted successfully!");
      const user = response.data.message;
      console.log("user: ", user);
      reset();
      setLoading(false);
      setSelectedEnquiryValue(null);
      setSelectedServiceValue(null);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error submitting form. Please try again later.");
    }
  };

  return (
    <div className=" px-[5%] lg:px-[5%] my-6 xl:my-7 ">
      <ToastContainer />
      <section className=" h-[240px] sm:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.55082311516!2d3.4376762735036945!3d6.451662623997082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4e82fbe9423%3A0xa9c16549d43d88ca!2s49%20Glover%20Rd%2C%20Ikoyi%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1704725613214!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <form
        action=""
        onSubmit={handleSubmit(handleApiSubmit, handleError)}
        className=" mt-7 "
      >
        <div className="gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between">
          <section className="w-[100%] sm:w-[48%] flex flex-col gap-1 ">
            <input
              type="text"
              className="w-[100%] py-2 px-[1.5%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack "
              placeholder="Full Name"
              {...register("fromName", registerOptions.fromName)}
            />
            <small className=" text-[red] ">
              {errors?.fromName && errors.fromName.message}
            </small>
          </section>
          <section className="w-[100%] sm:w-[48%] flex flex-col gap-1 ">
            <input
              type="email"
              className="w-[100%] py-2 px-[1.5%] text-[0.9rem] sm:text-base placeholder:text-OtherBlack leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack "
              placeholder="Email"
              {...register("from", registerOptions.from)}
            />
            <small className=" text-[red] ">
              {errors?.from && errors.from.message}
            </small>
          </section>
        </div>

        <div className=" mt-5 gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between">
          <section className=" w-full sm:w-[48%] ">
            <DropdownAll
              options={[
                "Automotive",
                "Liquefied",
                "Petrol",
                "Kerosene",
                "Lubricants",
              ]}
              onSelect={handleServiceSelect}
              selectedValue={selectedServiceValue}
              choose="Service Type "
            />
            {!selectedServiceValue && (
              <small className="text-[red]">Please select an Service Type</small>
            )}
          </section>
          <section className=" w-full sm:w-[48%] ">
            <DropdownAll
              options={["Sales", "Other"]}
              onSelect={handleEnquirySelect}
              selectedValue={selectedEnquiryValue}
              choose="Enquiry Type "
            />
            {!selectedEnquiryValue && (
              <small className="text-[red]">Please select an Enquiry Type</small>
            )}
          </section>
        </div>

        <div>
          <textarea
            name=""
            id=""
            className="w-full resize-none mt-5 py-2 px-[1%] text-[0.9rem] sm:text-base leading-[212.5%] outline-none border-solid border-[1px] border-OtherBlack "
            cols=""
            rows="4"
            placeholder="Message"
            {...register("text", registerOptions.text)}
          />
          <small className=" text-[red] ">
            {errors?.text && errors.text.message}
          </small>
        </div>

        <div className=" mt-7  font-medium text-[0.9rem] leading-[140%] tracking-[0.199px]">
          <h3 className=" font-bold">Privacy Statement</h3>
          <p className="leading-[140%] mt-1 sm:mt-1 ">
            Vaspack Energy is committed to protecting and respecting your
            privacy. The Privacy Policy (together with our Terms of Use and any
            other documents referred to in it) sets out the basis on which any
            personal data which Vaspack Energy collects from you, or that you
            provide to Vaspack Energy, will be processed by us.
          </p>
        </div>

        <div className="mt-2  flex items-center gap-3 font-medium text-[0.8rem] tracking-[0.199px] ">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className=" cursor-pointer">
            I understand and agree
          </label>
        </div>

        <div className=" text-center mt-12">
          {loading ? (
            <button className=" bg-Secondary text-OtherWhite hover:bg-Primary rounded-[4px] px-4 lg:px-8 font-medium text-[0.8rem]  xl:text-[0.9rem]">
              <ThreeDots
                visible={true}
                height="45"
                width="45"
                color="#ffffff"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={
                  {
                    // padding: "0"
                  }
                }
                wrapperClass=""
              />
            </button>
          ) : (
            <button className=" bg-Secondary text-OtherWhite hover:bg-Primary rounded-[4px] py-2 lg:py-3 px-4 lg:px-6 font-medium text-[0.8rem]  xl:text-[0.9rem]">
              Send Message
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
