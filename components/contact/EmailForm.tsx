"use client";

import React, { useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import _ from "lodash";
import "./styles.css";
import toast from "react-hot-toast";

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
          toast.success("성공적으로 전송되었습니다!", {
            style: {
              width: "300px",
              padding: "16px",
              fontWeight: 400,
            },
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("전송에 실패하였습니다. 다시 시도해주시기 바랍니다.", {
            style: {
              width: "300px",
              padding: "16px",
              fontWeight: 400,
            },
          });
        }
      );
  });
  const debouncedOnSubmit = useCallback(
    _.debounce((values: any) => {
      onSubmit(values);
    }, 500),
    []
  );

  return (
    <>
      <form
        onSubmit={handleSubmit((values) => debouncedOnSubmit(values))}
        ref={formRef}
        className="p-6 md:w-[70%]"
      >
        <div className="mb-6 lg:flex lg:justify-between">
          <label className="pt-2">Name</label>
          <div className="email-form-input-box">
            <input {...register("user_name")} className="email-form-input" />
            {errors.user_name && (
              <p className="error-message">{errors.user_name.message}</p>
            )}
          </div>

          <label className="pt-2">Email</label>
          <div className="email-form-input-box">
            <input {...register("user_email")} className="email-form-input" />
            {errors.user_email && (
              <p className="error-message">{errors.user_email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6 flex flex-col">
          <label className="mb-2">Message</label>
          <textarea
            {...register("message")}
            className="h-48 p-2 border rounded-md resize-none"
          />
          {errors.message && (
            <p className="error-message">{errors.message.message}</p>
          )}
        </div>
        <div className="flex justify-center md:justify-start">
          <button type="submit" className="px-4 py-2 border rounded-md">
            Send Email
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailForm;
