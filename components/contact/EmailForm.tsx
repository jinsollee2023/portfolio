"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const emailFormSchema = z.object({
    user_name: z.string().min(2, {
      message: "2글자 이상의 이름을 입력해주세요.",
    }),
    user_email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
    message: z.string().min(2, {
      message: "10글자 이상의 메세지를 입력해주세요.",
    }),
  });

  type EmailFormSchema = z.infer<typeof emailFormSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailFormSchema>({
    resolver: zodResolver(emailFormSchema),
    mode: "onBlur",
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit((data: EmailFormSchema) => {
    console.log(data);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
          reset();
          // toast.success("성공적으로 전송되었습니다!", { // 성공시 팝업 라이브러리
          //   style: {
          //     maxWidth: "1000px",
          //     width: "300px",
          //     fontSize: "20px",
          //   },
          // });
        },
        (error) => {
          console.log(error.text);
          // toast.error("전송에 실패하였습니다. 다시 시도해주시기 바랍니다.", {
          //   style: {                       //실패시 팝업 라이브러리
          //     maxWidth: "1000px",
          //     width: "530px",
          //     fontSize: "20px",
          //   },
          // });
        }
      );
  });

  return (
    <form onSubmit={onSubmit} ref={formRef} className="p-6 md:w-[70%]">
      <div className="mb-6 lg:flex lg:justify-between">
        <label className="pt-2">Name</label>
        <div className="flex flex-col lg:w-[40%]">
          <input
            {...register("user_name")}
            className="h-10 border rounded-md "
          />
          {errors.user_name && (
            <p className="mt-2 text-center text-red-500">
              {errors.user_name.message}
            </p>
          )}
        </div>

        <label className="pt-2">Email</label>
        <div className="flex flex-col lg:w-[40%]">
          <input
            {...register("user_email")}
            className="h-10 border rounded-md "
          />
          {errors.user_email && (
            <p className="mt-2 text-center text-red-500">
              {errors.user_email.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-6 flex flex-col">
        <label className="mb-2">Message</label>
        <textarea
          {...register("message")}
          className="h-48 border rounded-md resize-none"
        />
        {errors.message && (
          <p className="mt-2 text-center text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>
      <div className="flex justify-center md:justify-start">
        <button type="submit" className="px-4 py-2 border rounded-md">
          Send Email
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
